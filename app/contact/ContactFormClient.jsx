"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Using relative import to avoid potential alias issues in jsconfig
import { ContactSchema } from "../../lib/schema";

export default function ContactFormClient() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    setStatus({ type: "", message: "" });
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      let payload = {};
      try {
        payload = await res.json();
      } catch {}
      if (!res.ok) {
        if (payload?.error?.fieldErrors) {
          Object.entries(payload.error.fieldErrors).forEach(([field, msgs]) => {
            if (Array.isArray(msgs) && msgs[0])
              setError(field, { type: "server", message: msgs[0] });
          });
        }
        throw new Error(payload?.error?.message || "Submission failed");
      }
      setStatus({
        type: "success",
        message: "Thank you for your message! We will get back to you soon.",
      });
      reset();
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err?.message ||
          "There was an error submitting your message. Please try again.",
      });
    }
  };

  const inputClass = (hasError) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2C2E9F] focus:border-transparent bg-white text-gray-900 ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="bg-[#F5F5F5] rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              aria-invalid={!!errors.name}
              className={inputClass(!!errors.name)}
              required
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              aria-invalid={!!errors.email}
              className={inputClass(!!errors.email)}
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+614XXXXXXXX"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            aria-invalid={!!errors.subject}
            className={inputClass(!!errors.subject)}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="How can we help you?"
            {...register("message")}
            aria-invalid={!!errors.message}
            className={inputClass(!!errors.message)}
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#2C2E9F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {status.message && (
          <div
            className={`text-center ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}
