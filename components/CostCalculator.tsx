"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Province =
  | "Ontario"
  | "British Columbia"
  | "Alberta"
  | "Manitoba"
  | "Saskatchewan"
  | "Quebec"
  | "Nova Scotia"
  | "New Brunswick"
  | "Newfoundland and Labrador"
  | "Prince Edward Island";

type CostKey =
  | "income"
  | "rent"
  | "groceries"
  | "phoneInternet"
  | "transit"
  | "utilities"
  | "other";

type CostValues = Record<CostKey, number>;

type HousingType = "sharedRoom" | "basementStudio" | "oneBedroom";

const housingOptions: Array<{
  key: HousingType;
  label: string;
  description: string;
}> = [
  {
    key: "sharedRoom",
    label: "Shared room",
    description: "Room or shared accommodation",
  },
  {
    key: "basementStudio",
    label: "Basement / studio",
    description: "Private basement or studio-style place",
  },
  {
    key: "oneBedroom",
    label: "1 bedroom apartment",
    description: "Private 1 bedroom rental",
  },
];

const rentPresets: Record<
  Province,
  Record<HousingType, { low: number; high: number; estimate: number }>
> = {
  Ontario: {
    sharedRoom: { low: 800, high: 1100, estimate: 950 },
    basementStudio: { low: 1300, high: 1800, estimate: 1550 },
    oneBedroom: { low: 1900, high: 2400, estimate: 2150 },
  },
  "British Columbia": {
    sharedRoom: { low: 900, high: 1300, estimate: 1100 },
    basementStudio: { low: 1500, high: 2100, estimate: 1800 },
    oneBedroom: { low: 2200, high: 2800, estimate: 2500 },
  },
  Alberta: {
    sharedRoom: { low: 700, high: 1000, estimate: 850 },
    basementStudio: { low: 1100, high: 1500, estimate: 1300 },
    oneBedroom: { low: 1500, high: 1900, estimate: 1700 },
  },
  Manitoba: {
    sharedRoom: { low: 600, high: 900, estimate: 750 },
    basementStudio: { low: 950, high: 1300, estimate: 1125 },
    oneBedroom: { low: 1250, high: 1650, estimate: 1450 },
  },
  Saskatchewan: {
    sharedRoom: { low: 600, high: 900, estimate: 750 },
    basementStudio: { low: 950, high: 1300, estimate: 1125 },
    oneBedroom: { low: 1250, high: 1650, estimate: 1450 },
  },
  Quebec: {
    sharedRoom: { low: 650, high: 950, estimate: 800 },
    basementStudio: { low: 1000, high: 1450, estimate: 1225 },
    oneBedroom: { low: 1400, high: 1900, estimate: 1650 },
  },
  "Nova Scotia": {
    sharedRoom: { low: 700, high: 1000, estimate: 850 },
    basementStudio: { low: 1150, high: 1600, estimate: 1375 },
    oneBedroom: { low: 1600, high: 2100, estimate: 1850 },
  },
  "New Brunswick": {
    sharedRoom: { low: 575, high: 875, estimate: 725 },
    basementStudio: { low: 900, high: 1250, estimate: 1075 },
    oneBedroom: { low: 1200, high: 1600, estimate: 1400 },
  },
  "Newfoundland and Labrador": {
    sharedRoom: { low: 600, high: 900, estimate: 750 },
    basementStudio: { low: 950, high: 1300, estimate: 1125 },
    oneBedroom: { low: 1300, high: 1700, estimate: 1500 },
  },
  "Prince Edward Island": {
    sharedRoom: { low: 650, high: 950, estimate: 800 },
    basementStudio: { low: 1000, high: 1400, estimate: 1200 },
    oneBedroom: { low: 1400, high: 1800, estimate: 1600 },
  },
};

const provinceDefaults: Record<Province, CostValues> = {
  Ontario: {
    income: 3000,
    rent: 950,
    groceries: 380,
    phoneInternet: 100,
    transit: 160,
    utilities: 90,
    other: 220,
  },
  "British Columbia": {
    income: 3200,
    rent: 1100,
    groceries: 420,
    phoneInternet: 105,
    transit: 175,
    utilities: 90,
    other: 240,
  },
  Alberta: {
    income: 3100,
    rent: 850,
    groceries: 370,
    phoneInternet: 95,
    transit: 120,
    utilities: 120,
    other: 220,
  },
  Manitoba: {
    income: 2800,
    rent: 750,
    groceries: 350,
    phoneInternet: 95,
    transit: 110,
    utilities: 120,
    other: 200,
  },
  Saskatchewan: {
    income: 2800,
    rent: 750,
    groceries: 350,
    phoneInternet: 95,
    transit: 105,
    utilities: 125,
    other: 200,
  },
  Quebec: {
    income: 2900,
    rent: 800,
    groceries: 360,
    phoneInternet: 95,
    transit: 115,
    utilities: 90,
    other: 210,
  },
  "Nova Scotia": {
    income: 2800,
    rent: 850,
    groceries: 380,
    phoneInternet: 100,
    transit: 90,
    utilities: 125,
    other: 210,
  },
  "New Brunswick": {
    income: 2700,
    rent: 725,
    groceries: 360,
    phoneInternet: 95,
    transit: 80,
    utilities: 125,
    other: 200,
  },
  "Newfoundland and Labrador": {
    income: 2700,
    rent: 750,
    groceries: 380,
    phoneInternet: 100,
    transit: 85,
    utilities: 130,
    other: 200,
  },
  "Prince Edward Island": {
    income: 2700,
    rent: 800,
    groceries: 370,
    phoneInternet: 95,
    transit: 75,
    utilities: 125,
    other: 200,
  },
};

const provinces = Object.keys(provinceDefaults) as Province[];

const costFields: Array<{
  key: CostKey;
  label: string;
  helper: string;
}> = [
  {
    key: "income",
    label: "Monthly take-home income",
    helper: "After tax, before expenses",
  },
  {
    key: "rent",
    label: "Rent / shared room",
    helper: "Room, basement, or your share",
  },
  {
    key: "groceries",
    label: "Groceries",
    helper: "One-person starter budget",
  },
  {
    key: "phoneInternet",
    label: "Phone + internet",
    helper: "Mobile plan and home internet",
  },
  {
    key: "transit",
    label: "Transit / car",
    helper: "Bus pass, gas, insurance buffer",
  },
  {
    key: "utilities",
    label: "Utilities",
    helper: "Hydro, heat, water if separate",
  },
  {
    key: "other",
    label: "Other",
    helper: "Clothes, medicine, small surprises",
  },
];

const currency = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

function parseMoney(value: string) {
  const parsed = Number(value.replace(/[^\d.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function CostCalculator() {
  const [province, setProvince] = useState<Province>("Ontario");
  const [housingType, setHousingType] = useState<HousingType>("sharedRoom");
  const [city, setCity] = useState("");
  const [values, setValues] = useState<CostValues>({
    ...provinceDefaults.Ontario,
    rent: rentPresets.Ontario.sharedRoom.estimate,
  });

  const rentPreset = rentPresets[province][housingType];
  const selectedHousing = housingOptions.find(
    (option) => option.key === housingType,
  );

  const totalCost = useMemo(
    () =>
      values.rent +
      values.groceries +
      values.phoneInternet +
      values.transit +
      values.utilities +
      values.other,
    [values],
  );
  const remaining = values.income - totalCost;

  const status = useMemo(() => {
    if (remaining < 0) {
      return {
        label: "Tight",
        message:
          "Tight, mowa — shared housing, lower rent, or extra income may help.",
        className: "bg-red-50 text-red-700 border-red-100",
      };
    }

    if (remaining < 500) {
      return {
        label: "Manageable",
        message: "Manageable — keep a small emergency buffer if you can.",
        className: "bg-yellow-50 text-yellow-800 border-yellow-100",
      };
    }

    return {
      label: "Comfortable",
      message: "Comfortable — you have some room to breathe and plan ahead.",
      className: "bg-green-50 text-green-700 border-green-100",
    };
  }, [remaining]);

  function updateProvince(nextProvince: Province) {
    setProvince(nextProvince);
    setValues({
      ...provinceDefaults[nextProvince],
      rent: rentPresets[nextProvince][housingType].estimate,
    });
  }

  function updateHousingType(nextHousingType: HousingType) {
    setHousingType(nextHousingType);
    setValues((current) => ({
      ...current,
      rent: rentPresets[province][nextHousingType].estimate,
    }));
  }

  function updateValue(key: CostKey, value: string) {
    setValues((current) => ({
      ...current,
      [key]: parseMoney(value),
    }));
  }

  return (
    <motion.div
      id="cost-calculator"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="mt-5 overflow-hidden rounded-3xl border border-[#ead7cf] bg-white/80 shadow-md backdrop-blur"
    >
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-5 sm:p-6">
          <p className="text-sm font-semibold text-red-600">
            Newcomer cost calculator
          </p>
          <h3 className="mt-2 text-2xl font-bold">
            Estimate your monthly survival cost
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5c4b4b]">
            Choose province and housing type first. We prefill rough starter
            estimates for one person, then you can edit every number.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <label className="block">
              <span className="text-sm font-semibold text-[#3a1515]">
                Province
              </span>
              <select
                value={province}
                onChange={(event) => updateProvince(event.target.value as Province)}
                className="mt-2 w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-sm text-[#251010] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
              >
                {provinces.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#3a1515]">
                Housing type
              </span>
              <select
                value={housingType}
                onChange={(event) =>
                  updateHousingType(event.target.value as HousingType)
                }
                className="mt-2 w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-sm text-[#251010] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
              >
                {housingOptions.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#3a1515]">
                City optional
              </span>
              <input
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="Toronto, Oshawa, Calgary..."
                className="mt-2 w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-sm text-[#251010] outline-none transition placeholder:text-[#8c7770] focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </label>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {costFields.map((field) => (
              <label
                key={field.key}
                className={
                  field.key === "income"
                    ? "block sm:col-span-2"
                    : "block"
                }
              >
                <span className="text-sm font-semibold text-[#3a1515]">
                  {field.label}
                </span>
                <input
                  inputMode="decimal"
                  value={values[field.key] ? String(values[field.key]) : ""}
                  onChange={(event) => updateValue(field.key, event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#ead7cf] bg-white px-4 py-3 text-sm text-[#251010] outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
                <span className="mt-1 block text-xs text-[#7a6f6b]">
                  {field.key === "rent"
                    ? `${selectedHousing?.description ?? "Housing"} rough range: ${currency.format(
                        rentPreset.low,
                      )}–${currency.format(rentPreset.high)}`
                    : field.helper}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-[#ead7cf] bg-gradient-to-br from-[#3a1515] via-[#251010] to-[#140909] p-5 text-white lg:border-l lg:border-t-0 sm:p-6">
          <p className="text-sm font-semibold text-red-300">
            Your estimate
          </p>
          <h3 className="mt-2 text-2xl font-bold">
            {city.trim() ? `${city.trim()}, ${province}` : province}
          </h3>
          <p className="mt-1 text-sm text-red-100/65">
            {selectedHousing?.label} starter estimate
          </p>

          <div className="mt-5 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
              <p className="text-sm text-red-100/70">Rent range used</p>
              <p className="mt-1 text-2xl font-black text-yellow-200">
                {currency.format(rentPreset.low)}–{currency.format(rentPreset.high)}
              </p>
              <p className="mt-1 text-xs text-red-50/60">
                Current rent input: {currency.format(values.rent)}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
              <p className="text-sm text-red-100/70">Monthly cost</p>
              <p className="mt-1 text-4xl font-black text-white">
                {currency.format(totalCost)}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
              <p className="text-sm text-red-100/70">Money left after expenses</p>
              <p
                className={`mt-1 text-4xl font-black ${
                  remaining < 0 ? "text-red-300" : "text-yellow-200"
                }`}
              >
                {currency.format(remaining)}
              </p>
            </div>

            <div className={`rounded-2xl border p-4 ${status.className}`}>
              <p className="text-sm font-black uppercase tracking-[0.18em]">
                {status.label}
              </p>
              <p className="mt-2 text-sm leading-6">{status.message}</p>
            </div>
          </div>

          <p className="mt-5 text-xs leading-5 text-red-50/65">
            Starter estimates only. Actual costs vary by city, housing type,
            lifestyle, season, and family size.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
