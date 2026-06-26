const roundsUrl =
  "https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json";

type IrccRound = {
  drawNumber?: string;
  drawDate?: string;
  drawDateFull?: string;
  drawName?: string;
  drawSize?: string;
  drawCRS?: string;
  drawText2?: string;
  drawDateTime?: string;
  drawCutOff?: string;
};

type IrccRoundsResponse = {
  rounds?: IrccRound[];
};

type PublicRound = {
  number: string;
  date: string;
  dateFull: string;
  name: string;
  invitations: number | null;
  crs: number | null;
  program: string;
  dateTime: string;
  tieBreak: string;
};

const fallbackRounds: PublicRound[] = [
  {
    number: "422",
    date: "2026-06-25",
    dateFull: "June 25, 2026",
    name: "Healthcare and Social Services Occupations, 2026-Version 3",
    invitations: 4000,
    crs: 475,
    program:
      "Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program",
    dateTime: "June 25, 2026 at 13:51:43 UTC",
    tieBreak: "May 21, 2026 at 12:14:09 UTC",
  },
  {
    number: "421",
    date: "2026-06-24",
    dateFull: "June 24, 2026",
    name: "Physicians with Canadian Work Experience, 2026-Version 1",
    invitations: 271,
    crs: 223,
    program:
      "Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program",
    dateTime: "June 24, 2026 at 14:00:30 UTC",
    tieBreak: "May 31, 2026 at 18:13:49 UTC",
  },
  {
    number: "420",
    date: "2026-06-23",
    dateFull: "June 23, 2026",
    name: "Canadian Experience Class",
    invitations: 4000,
    crs: 516,
    program: "Canadian Experience Class",
    dateTime: "June 23, 2026 at 12:52:12 UTC",
    tieBreak: "April 14, 2026 at 00:03:10 UTC",
  },
  {
    number: "419",
    date: "2026-06-22",
    dateFull: "June 22, 2026",
    name: "Provincial Nominee Program",
    invitations: 955,
    crs: 730,
    program: "Provincial Nominee Program",
    dateTime: "June 22, 2026 at 04:06:26 UTC",
    tieBreak: "March 09, 2026 at 01:02:28 UTC",
  },
  {
    number: "418",
    date: "2026-05-28",
    dateFull: "May 28, 2026",
    name: "French-Language proficiency 2026-Version 2",
    invitations: 4500,
    crs: 409,
    program:
      "Federal Skilled Worker Program, Canadian Experience Class and Federal Skilled Trades Program",
    dateTime: "May 28, 2026 at 10:52:36 UTC",
    tieBreak: "April 29, 2026 at 22:20:00 UTC",
  },
];

function roundsResponse(rounds: PublicRound[], stale = false) {
  return Response.json(
    {
      sourceUrl:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html",
      officialCalculatorUrl:
        "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html",
      fetchedAt: new Date().toISOString(),
      stale,
      rounds,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
}

function parseNumber(value: string | undefined) {
  if (!value) return null;

  const parsed = Number(value.replace(/[^\d]/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

export async function GET() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch(roundsUrl, {
      headers: {
        Accept: "application/json",
      },
      signal: controller.signal,
      next: {
        revalidate: 60 * 60,
      },
    });
    clearTimeout(timeout);

    if (!response.ok) {
      return roundsResponse(fallbackRounds, true);
    }

    const data = (await response.json()) as IrccRoundsResponse;
    const rounds: PublicRound[] = (data.rounds ?? []).slice(0, 12).map((round) => ({
      number: round.drawNumber ?? "",
      date: round.drawDate ?? "",
      dateFull: round.drawDateFull ?? "",
      name: round.drawName ?? "Express Entry round",
      invitations: parseNumber(round.drawSize),
      crs: parseNumber(round.drawCRS),
      program: round.drawText2 ?? "",
      dateTime: round.drawDateTime ?? "",
      tieBreak: round.drawCutOff ?? "",
    }));

    return roundsResponse(rounds, false);
  } catch (error) {
    clearTimeout(timeout);
    if (!(error instanceof Error && error.name === "AbortError")) {
      console.error("Express Entry rounds API error:", error);
    }

    return roundsResponse(fallbackRounds, true);
  }
}
