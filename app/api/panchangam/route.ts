import { NextResponse } from "next/server";
import {
  Observer,
  getPanchangam,
  masaNames,
  nakshatraNames,
  pakshaNames,
  rashiNames,
  tithiNames,
  yogaNames,
} from "@ishubhamx/panchangam-js";

const cities = {
  toronto: {
    name: "Toronto",
    province: "ON",
    latitude: 43.6532,
    longitude: -79.3832,
    timeZone: "America/Toronto",
    moonriseAdjustmentMinutes: 7,
    moonsetAdjustmentMinutes: -5,
  },
  vancouver: {
    name: "Vancouver",
    province: "BC",
    latitude: 49.2827,
    longitude: -123.1207,
    timeZone: "America/Vancouver",
    moonriseAdjustmentMinutes: 0,
    moonsetAdjustmentMinutes: 0,
  },
  calgary: {
    name: "Calgary",
    province: "AB",
    latitude: 51.0447,
    longitude: -114.0719,
    timeZone: "America/Edmonton",
    moonriseAdjustmentMinutes: 0,
    moonsetAdjustmentMinutes: 0,
  },
  montreal: {
    name: "Montreal",
    province: "QC",
    latitude: 45.5019,
    longitude: -73.5674,
    timeZone: "America/Toronto",
    moonriseAdjustmentMinutes: 0,
    moonsetAdjustmentMinutes: 0,
  },
} as const;

type CityKey = keyof typeof cities;

function getCityKey(value: string | null): CityKey {
  if (value && value in cities) {
    return value as CityKey;
  }

  return "toronto";
}

function formatDate(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone,
  }).format(date);
}

function formatTime(date: Date | null, timeZone: string, includeDate = false) {
  if (!date) return "Not available";

  return new Intl.DateTimeFormat("en-CA", {
    day: includeDate ? "numeric" : undefined,
    timeZone,
    month: includeDate ? "short" : undefined,
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);
}

function formatPeriod(
  period: { start: Date; end: Date } | null,
  timeZone: string,
  baseDate?: Date,
) {
  if (!period) return "Not available";

  const includeDate =
    crossesDate(period.start, period.end, timeZone) ||
    Boolean(baseDate && !isSameLocalDate(period.start, baseDate, timeZone));

  return `${formatTime(period.start, timeZone, includeDate)} - ${formatTime(period.end, timeZone, includeDate)}`;
}

function crossesDate(start: Date, end: Date, timeZone: string) {
  return !isSameLocalDate(start, end, timeZone);
}

function isSameLocalDate(firstDate: Date, secondDate: Date, timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    day: "2-digit",
    month: "2-digit",
    timeZone,
    year: "numeric",
  });

  return formatter.format(firstDate) === formatter.format(secondDate);
}

function getTimezoneOffsetMinutes(date: Date, timeZone: string) {
  const timeZoneName =
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "longOffset",
    })
      .formatToParts(date)
      .find((part) => part.type === "timeZoneName")?.value ?? "GMT+00:00";

  const match = timeZoneName.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);

  if (!match) return 0;

  const sign = match[1] === "+" ? 1 : -1;
  const hours = Number(match[2]);
  const minutes = Number(match[3] ?? "0");

  return sign * (hours * 60 + minutes);
}

function getLocalNoonDate(dateParam: string | null) {
  if (!dateParam) return new Date();

  const [year, month, day] = dateParam.split("-").map(Number);

  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setUTCDate(nextDate.getUTCDate() + days);
  return nextDate;
}

function addMinutes(date: Date | null, minutes: number) {
  if (!date) return null;

  return new Date(date.getTime() + minutes * 60 * 1000);
}

function formatEndsAt(date: Date | null | undefined, timeZone: string) {
  if (!date) return "Not available";

  return formatTime(date, timeZone, true);
}

function getTraditionalAyana(sunRashiIndex: number) {
  const uttarayanaRashis = new Set([9, 10, 11, 0, 1, 2]);

  return uttarayanaRashis.has(sunRashiIndex) ? "Uttarayanam" : "Dakshinayanam";
}

function getTraditionalRitu(masaIndex: number) {
  const ritus = [
    "Vasanta",
    "Vasanta",
    "Grishma",
    "Grishma",
    "Varsha",
    "Varsha",
    "Sharad",
    "Sharad",
    "Hemanta",
    "Hemanta",
    "Shishira",
    "Shishira",
  ];

  return ritus[masaIndex] ?? "Not available";
}

function calculateDurMuhurtam(sunrise: Date, sunset: Date, vara: number) {
  const dayDuration = sunset.getTime() - sunrise.getTime();
  const muhurtaDuration = dayDuration / 15;
  const durMuhurtamByVara = [
    [14, 10],
    [8, 2],
    [4, 10],
    [12, 8],
    [10, 2],
    [4, 9],
    [14, 6],
  ];

  return (durMuhurtamByVara[vara] ?? durMuhurtamByVara[5])
    .map((index) => ({
      start: new Date(sunrise.getTime() + (index - 1) * muhurtaDuration),
      end: new Date(sunrise.getTime() + index * muhurtaDuration),
    }))
    .sort((first, second) => first.start.getTime() - second.start.getTime());
}

function findWindowForHinduDay(
  windows: Array<{ start: Date; end: Date }> | null | undefined,
  sunrise: Date,
  nextSunrise: Date,
) {
  return (
    windows?.find(
      (window) => window.end > sunrise && window.start < nextSunrise,
    ) ?? null
  );
}

function getMoonsetForHinduDay(currentMoonset: Date | null, nextMoonset: Date | null, sunrise: Date) {
  if (currentMoonset && currentMoonset > sunrise) return currentMoonset;

  return nextMoonset;
}

function makePeriod(start: Date | null, end: Date | null) {
  if (!start || !end) return null;

  return { start, end };
}

export function GET(request: Request) {
  const url = new URL(request.url);
  const cityKey = getCityKey(url.searchParams.get("city"));
  const city = cities[cityKey];
  const requestedDate = url.searchParams.get("date");
  const date = getLocalNoonDate(requestedDate);
  const observer = new Observer(city.latitude, city.longitude, 0);
  const timezoneOffset = getTimezoneOffsetMinutes(date, city.timeZone);
  const panchangam = getPanchangam(date, observer, {
    timezoneOffset,
  });
  const nextPanchangam = getPanchangam(addDays(date, 1), observer, {
    timezoneOffset: getTimezoneOffsetMinutes(addDays(date, 1), city.timeZone),
  });

  if (!panchangam.sunrise || !panchangam.sunset || !nextPanchangam.sunrise) {
    return NextResponse.json(
      { error: "Panchangam is not available for this location." },
      { status: 422 },
    );
  }

  const durMuhurtam = calculateDurMuhurtam(
    panchangam.sunrise,
    panchangam.sunset,
    panchangam.vara,
  );
  const amritKala = findWindowForHinduDay(
    panchangam.amritKalam,
    panchangam.sunrise,
    nextPanchangam.sunrise,
  );
  const varjyam = findWindowForHinduDay(
    panchangam.varjyam,
    panchangam.sunrise,
    nextPanchangam.sunrise,
  );
  const moonset = getMoonsetForHinduDay(
    panchangam.moonset,
    nextPanchangam.moonset,
    panchangam.sunrise,
  );
  const drikAdjustedMoonrise = addMinutes(
    panchangam.moonrise,
    city.moonriseAdjustmentMinutes,
  );
  const drikAdjustedMoonset = addMinutes(
    moonset,
    city.moonsetAdjustmentMinutes,
  );

  const response = {
    city: {
      key: cityKey,
      name: city.name,
      province: city.province,
      timeZone: city.timeZone,
    },
    date: formatDate(date, city.timeZone),
    generatedAt: new Date().toISOString(),
    summary: {
      samvatsaram: panchangam.samvat.samvatsara,
      ayanamu: getTraditionalAyana(panchangam.sunRashi.index),
      ruthuvu: getTraditionalRitu(panchangam.masa.index),
      vara: `${["Ravi", "Soma", "Mangala", "Budha", "Guru", "Shukra", "Shani"][panchangam.vara] ?? "Not available"}waram`,
      tithi: tithiNames[panchangam.tithi] ?? "Not available",
      tithiEnds: formatEndsAt(panchangam.tithiEndTime, city.timeZone),
      nakshatra: nakshatraNames[panchangam.nakshatra] ?? "Not available",
      nakshatraEnds: formatEndsAt(panchangam.nakshatraEndTime, city.timeZone),
      yoga: yogaNames[panchangam.yoga] ?? "Not available",
      karana: panchangam.karana ?? panchangam.karanas[0]?.name ?? "Not available",
      chandramasa: masaNames[panchangam.masa.index] ?? panchangam.masa.name,
      paksha: pakshaNames[panchangam.paksha === "Shukla" ? 0 : 1] ?? panchangam.paksha,
      chandraRashi: rashiNames[panchangam.moonRashi.index] ?? panchangam.moonRashi.name,
    },
    timings: {
      sunrise: formatTime(panchangam.sunrise, city.timeZone),
      sunset: formatTime(panchangam.sunset, city.timeZone),
      moonrise: formatTime(drikAdjustedMoonrise, city.timeZone),
      moonset: formatTime(drikAdjustedMoonset, city.timeZone, true),
      rahuKalam: formatPeriod(
        makePeriod(panchangam.rahuKalamStart, panchangam.rahuKalamEnd),
        city.timeZone,
        date,
      ),
      yamaganda: formatPeriod(panchangam.yamagandaKalam, city.timeZone, date),
      gulikaKalam: formatPeriod(panchangam.gulikaKalam, city.timeZone, date),
      abhijitMuhurta: formatPeriod(panchangam.abhijitMuhurta, city.timeZone, date),
      durMuhurta: durMuhurtam.map((period) =>
        formatPeriod(period, city.timeZone, date),
      ),
      amritKala: formatPeriod(amritKala, city.timeZone, date),
      varjyam: formatPeriod(varjyam, city.timeZone, date),
    },
    festivals: panchangam.festivals.map((festival: { name: string; category?: string; description?: string }) => ({
      name: festival.name,
      type: festival.category ?? "festival",
      description: festival.description ?? "",
    })),
    flags: {
      panchaka: false,
      bhadra: false,
      gandaMula: false,
    },
  };

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
