"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type JobStatus = "Saved" | "Applied" | "Interview" | "Offer" | "Rejected";

type JobLead = {
  id: string;
  company: string;
  role: string;
  city: string;
  status: JobStatus;
  followUp: string;
  notes: string;
  createdAt: string;
};

const storageKey = "careofcanada-job-tracker";

const statuses: JobStatus[] = [
  "Saved",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
];

const statusStyles: Record<JobStatus, string> = {
  Saved: "bg-slate-50 text-slate-700 border-slate-200",
  Applied: "bg-red-50 text-red-700 border-red-100",
  Interview: "bg-yellow-50 text-yellow-800 border-yellow-100",
  Offer: "bg-green-50 text-green-700 border-green-100",
  Rejected: "bg-zinc-50 text-zinc-600 border-zinc-200",
};

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function JobTracker() {
  const [hydrated, setHydrated] = useState(false);
  const [jobs, setJobs] = useState<JobLead[]>([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState<JobStatus>("Saved");
  const [followUp, setFollowUp] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(storageKey);
        if (stored) {
          setJobs(JSON.parse(stored) as JobLead[]);
        }
      } catch (error) {
        console.error("Unable to load job tracker:", error);
      } finally {
        setHydrated(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(jobs));
    } catch (error) {
      console.error("Unable to save job tracker:", error);
    }
  }, [hydrated, jobs]);

  const summary = useMemo(
    () =>
      statuses.map((item) => ({
        status: item,
        count: jobs.filter((job) => job.status === item).length,
      })),
    [jobs],
  );

  function resetForm() {
    setCompany("");
    setRole("");
    setCity("");
    setStatus("Saved");
    setFollowUp("");
    setNotes("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!company.trim() || !role.trim()) return;

    setJobs((current) => [
      {
        id: createId(),
        company: company.trim(),
        role: role.trim(),
        city: city.trim(),
        status,
        followUp,
        notes: notes.trim(),
        createdAt: new Date().toISOString(),
      },
      ...current,
    ]);
    resetForm();
  }

  function updateJobStatus(id: string, nextStatus: JobStatus) {
    setJobs((current) =>
      current.map((job) =>
        job.id === id ? { ...job, status: nextStatus } : job,
      ),
    );
  }

  function deleteJob(id: string) {
    setJobs((current) => current.filter((job) => job.id !== id));
  }

  return (
    <motion.div
      id="job-tracker"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="mt-5 overflow-hidden rounded-3xl border border-[#ead7cf] bg-white/80 shadow-md backdrop-blur"
    >
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-[#ead7cf] bg-gradient-to-br from-[#3a1515] via-[#251010] to-[#140909] p-5 text-white lg:border-b-0 lg:border-r sm:p-6">
          <p className="text-sm font-semibold text-red-300">
            Local job tracker
          </p>
          <h3 className="mt-2 text-2xl font-bold">
            Track part-time and full-time applications
          </h3>
          <p className="mt-2 text-sm leading-6 text-red-50/70">
            Add companies you applied to, follow-up dates, and notes. Saved
            only on this device for now.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {summary.map((item) => (
              <div
                key={item.status}
                className="rounded-2xl border border-white/10 bg-white/8 p-4"
              >
                <p className="text-3xl font-black text-yellow-200">
                  {item.count}
                </p>
                <p className="mt-1 text-xs font-semibold text-red-50/70">
                  {item.status}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-red-50/60">
            Privacy note: this is not synced to CareOfCanada yet. If you clear
            browser data or switch devices, your tracker may not come with you.
          </p>
        </div>

        <div className="p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-[#3a1515]">
                Company / business
              </span>
              <input
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Tim Hortons, Walmart..."
                className="mt-2 w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-sm text-[#251010] outline-none transition placeholder:text-[#8c7770] focus:border-red-500 focus:ring-2 focus:ring-red-100"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#3a1515]">
                Role
              </span>
              <input
                value={role}
                onChange={(event) => setRole(event.target.value)}
                placeholder="Cashier, warehouse associate..."
                className="mt-2 w-full rounded-xl border border-[#ead7cf] bg-[#fff8f5] px-4 py-3 text-sm text-[#251010] outline-none transition placeholder:text-[#8c7770] focus:border-red-500 focus:ring-2 focus:ring-red-100"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#3a1515]">
                City optional
              </span>
              <input
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="Brampton, Oshawa..."
                className="mt-2 w-full rounded-xl border border-[#ead7cf] bg-white px-4 py-3 text-sm text-[#251010] outline-none transition placeholder:text-[#8c7770] focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#3a1515]">
                Status
              </span>
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value as JobStatus)}
                className="mt-2 w-full rounded-xl border border-[#ead7cf] bg-white px-4 py-3 text-sm text-[#251010] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100"
              >
                {statuses.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-[#3a1515]">
                Follow-up date optional
              </span>
              <input
                type="date"
                value={followUp}
                onChange={(event) => setFollowUp(event.target.value)}
                className="mt-2 w-full rounded-xl border border-[#ead7cf] bg-white px-4 py-3 text-sm text-[#251010] outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-[#3a1515]">
                Notes optional
              </span>
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder="Applied online, manager name, shift timing..."
                className="mt-2 h-24 w-full rounded-xl border border-[#ead7cf] bg-white px-4 py-3 text-sm text-[#251010] outline-none transition placeholder:text-[#8c7770] focus:border-red-500 focus:ring-2 focus:ring-red-100"
              />
            </label>

            <button
              type="submit"
              className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 sm:col-span-2"
            >
              Add Job
            </button>
          </form>

          <div className="mt-5 space-y-3">
            {jobs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#ead7cf] bg-[#fff8f5] p-5 text-sm leading-6 text-[#5c4b4b]">
                No jobs tracked yet. Add your first application so follow-ups
                do not disappear in WhatsApp screenshots and browser tabs.
              </div>
            ) : (
              jobs.map((job) => (
                <article
                  key={job.id}
                  className="rounded-2xl border border-[#ead7cf] bg-white p-4 shadow-sm"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-bold">{job.role}</h4>
                      <p className="text-sm font-semibold text-[#5c4b4b]">
                        {job.company}
                        {job.city ? ` • ${job.city}` : ""}
                      </p>
                      {job.followUp && (
                        <p className="mt-2 text-sm text-red-700">
                          Follow up: {job.followUp}
                        </p>
                      )}
                      {job.notes && (
                        <p className="mt-2 text-sm leading-6 text-[#5c4b4b]">
                          {job.notes}
                        </p>
                      )}
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <select
                        value={job.status}
                        onChange={(event) =>
                          updateJobStatus(job.id, event.target.value as JobStatus)
                        }
                        className={`rounded-full border px-3 py-2 text-xs font-bold outline-none ${statusStyles[job.status]}`}
                      >
                        {statuses.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => deleteJob(job.id)}
                        className="rounded-full border border-[#ead7cf] px-3 py-2 text-xs font-bold text-[#7a6f6b] transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
