"use client";

import { useState, useMemo } from "react";
import { JobOpeningSchema } from "@/lib/schema";
import Link from "next/link";

export default function JobOpeningForm() {
  const [formData, setFormData] = useState({
    job_title: "",
    location: "",
    employment_type: "",
    duration: "",
    company_name: "",
    company_description: "",
    role_summary: "",
    responsibilities: "",
    requirements: "",
    nice_to_have: "",
    benefits: "",
    salary_range: "",
    contact_email: "",
    equal_opportunity_stmt: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    const parsed = JobOpeningSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/jobopenings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Something went wrong");
      }

      setStatus({
        type: "success",
        message: "Job opening saved successfully.",
      });
      setFormData({
        job_title: "",
        location: "",
        employment_type: "",
        duration: "",
        company_name: "",
        company_description: "",
        role_summary: "",
        responsibilities: "",
        requirements: "",
        nice_to_have: "",
        benefits: "",
        salary_range: "",
        contact_email: "",
        equal_opportunity_stmt: "",
      });
      setErrors({});
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fe = (name) =>
    Array.isArray(errors?.[name]) ? errors[name][0] : undefined;

  const readableLabels = {
    job_title: "Job Title",
    location: "Location",
    employment_type: "Employment Type",
    duration: "Duration",
    company_name: "Company Name",
    company_description: "Company Description",
    role_summary: "Role Summary",
    responsibilities: "Responsibilities",
    requirements: "Requirements",
    nice_to_have: "Nice to Have",
    benefits: "Benefits",
    salary_range: "Salary Range",
    contact_email: "Contact Email",
    equal_opportunity_stmt: "Equal Opportunity Statement",
  };

  const fieldGroups = useMemo(
    () => [
      {
        title: "Basic Information",
        desc: "Core identifying details about the position.",
        fields: ["job_title", "location", "employment_type", "duration"],
      },
      {
        title: "Company Profile",
        desc: "Who you are as an organization.",
        fields: ["company_name", "company_description"],
      },
      {
        title: "Role Details",
        desc: "Describe the opportunity and key responsibilities.",
        fields: ["role_summary", "responsibilities"],
      },
      {
        title: "Candidate Fit",
        desc: "What you require and what is nice to have.",
        fields: ["requirements", "nice_to_have"],
      },
      {
        title: "Compensation & Contact",
        desc: "Benefits, salary information, and point of contact.",
        fields: ["benefits", "salary_range", "contact_email"],
      },
      {
        title: "Statements",
        desc: "Legal and inclusion statements.",
        fields: ["equal_opportunity_stmt"],
      },
    ],
    []
  );

  const isTextarea = (field) =>
    [
      "company_description",
      "role_summary",
      "responsibilities",
      "requirements",
      "nice_to_have",
      "benefits",
      "equal_opportunity_stmt",
    ].includes(field);

  const inputBase =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40 transition";
  const labelBase = "text-sm font-medium text-gray-700 flex items-center gap-1";
  const sectionCard =
    "rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-4";

  return (
    <div className="mx-auto max-w-5xl p-4 space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary-blue">
            Add a Job Opening
          </h1>
          <p className="text-sm text-gray-600">
            Provide complete details for better candidate relevance.
          </p>
        </div>
        <div className="flex gap-2 self-start md:self-auto">
          <Link
            href="/admin/managejobs"
            className="inline-flex items-center gap-1 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
          >
            Manage Jobs
          </Link>
          <Link
            href="/admin"
            className="inline-flex items-center gap-1 rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            Dashboard
          </Link>
        </div>
      </header>

      {status.message && (
        <div
          role="alert"
          className={`rounded-md border p-3 text-sm ${
            status.type === "error"
              ? "border-red-300 bg-red-50 text-red-700"
              : "border-green-300 bg-green-50 text-green-700"
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {fieldGroups.map((group) => (
          <fieldset key={group.title} className={sectionCard}>
            <legend className="text-base font-semibold text-gray-900">
              {group.title}
            </legend>
            <p className="text-xs text-gray-500 -mt-1">{group.desc}</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {group.fields.map((field) => (
                <div
                  key={field}
                  className={
                    isTextarea(field) ? "md:col-span-2 space-y-1" : "space-y-1"
                  }
                >
                  <label htmlFor={field} className={labelBase}>
                    {readableLabels[field] || field}
                    {fe(field) && (
                      <span className="text-red-600 text-xs font-normal">
                        *
                      </span>
                    )}
                  </label>
                  {isTextarea(field) ? (
                    <textarea
                      id={field}
                      name={field}
                      rows={4}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`${inputBase} ${
                        fe(field)
                          ? "border-red-500 focus:border-red-500 focus:ring-red-300"
                          : ""
                      }`}
                      placeholder={`Enter ${readableLabels[field] || field}`}
                    />
                  ) : (
                    <input
                      id={field}
                      type={field === "contact_email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`${inputBase} ${
                        fe(field)
                          ? "border-red-500 focus:border-red-500 focus:ring-red-300"
                          : ""
                      }`}
                      placeholder={`Enter ${readableLabels[field] || field}`}
                    />
                  )}
                  {fe(field) && (
                    <p className="text-xs text-red-600">{fe(field)}</p>
                  )}
                </div>
              ))}
            </div>
          </fieldset>
        ))}

        <div className="flex items-center justify-end gap-3">
          <button
            type="reset"
            onClick={() => {
              if (confirm("Clear all form fields?")) {
                setFormData({
                  job_title: "",
                  location: "",
                  employment_type: "",
                  duration: "",
                  company_name: "",
                  company_description: "",
                  role_summary: "",
                  responsibilities: "",
                  requirements: "",
                  nice_to_have: "",
                  benefits: "",
                  salary_range: "",
                  contact_email: "",
                  equal_opportunity_stmt: "",
                });
                setErrors({});
                setStatus({ type: "", message: "" });
              }
            }}
            className="inline-flex items-center gap-1 rounded-md border px-5 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            Clear
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-md bg-primary-blue px-6 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            )}
            {isSubmitting ? "Submitting…" : "Save Job"}
          </button>
        </div>
      </form>

      <footer className="pt-4 text-center text-xs text-gray-400">
        All fields validated with schema on submit.
      </footer>
    </div>
  );
}
