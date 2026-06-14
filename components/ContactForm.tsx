"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

type State = "idle" | "loading" | "success" | "error";

const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA";

const inputBase =
  "w-full rounded-lg border-hair border-hairline bg-canvas px-4 py-3 text-[14px] text-ink placeholder:text-faint focus:border-ink focus:outline-none transition-colors";

export default function ContactForm() {
  const [formState, setFormState] = useState<State>("idle");
  const [apiError, setApiError] = useState("");
  const [token, setToken] = useState("");

  const [fields, setFields] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Partial<typeof fields>>({});

  function set(key: keyof typeof fields) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      setFieldErrors((errs) => ({ ...errs, [key]: undefined }));
    };
  }

  function validate(): Partial<typeof fields> {
    const errs: Partial<typeof fields> = {};
    if (!fields.name.trim()) errs.name = "Please enter your name.";
    if (!fields.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!fields.message.trim()) errs.message = "Please enter your message.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }

    if (!token) {
      setApiError("Please complete the security check before submitting.");
      return;
    }

    setFormState("loading");
    setApiError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, turnstileToken: token }),
      });

      const data = (await res.json()) as { error?: string };

      if (res.ok) {
        setFormState("success");
      } else {
        setApiError(data.error ?? "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setApiError(
        "Something went wrong. Please try again or email us directly."
      );
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="py-10">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-macro/10">
          <svg
            className="h-5 w-5 text-macro"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-[17px] font-medium text-ink md:text-[19px]">
          Thank you for contacting MacroKinetic.
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-muted">
          We have received your enquiry and will follow up as soon as possible.
        </p>
      </div>
    );
  }

  const isLoading = formState === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Row 1: name + email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-name"
            className="mb-1.5 block text-[11px] uppercase tracking-tracked text-faint"
          >
            Contact person <span className="text-kinetic">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={fields.name}
            onChange={set("name")}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "cf-name-err" : undefined}
            className={inputBase}
          />
          {fieldErrors.name && (
            <p id="cf-name-err" className="mt-1.5 text-[12px] text-kinetic">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="cf-email"
            className="mb-1.5 block text-[11px] uppercase tracking-tracked text-faint"
          >
            Contact email <span className="text-kinetic">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={fields.email}
            onChange={set("email")}
            disabled={isLoading}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "cf-email-err" : undefined}
            className={inputBase}
          />
          {fieldErrors.email && (
            <p id="cf-email-err" className="mt-1.5 text-[12px] text-kinetic">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: company */}
      <div>
        <label
          htmlFor="cf-company"
          className="mb-1.5 block text-[11px] uppercase tracking-tracked text-faint"
        >
          Company name
        </label>
        <input
          id="cf-company"
          type="text"
          autoComplete="organization"
          placeholder="Your organisation"
          value={fields.company}
          onChange={set("company")}
          disabled={isLoading}
          className={inputBase}
        />
      </div>

      {/* Row 3: message */}
      <div>
        <label
          htmlFor="cf-message"
          className="mb-1.5 block text-[11px] uppercase tracking-tracked text-faint"
        >
          Questions / Message <span className="text-kinetic">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={5}
          placeholder="Tell us about your project, requirement or question…"
          value={fields.message}
          onChange={set("message")}
          disabled={isLoading}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "cf-msg-err" : undefined}
          className={`${inputBase} resize-y`}
        />
        {fieldErrors.message && (
          <p id="cf-msg-err" className="mt-1.5 text-[12px] text-kinetic">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* CAPTCHA */}
      <Turnstile
        siteKey={SITE_KEY}
        onSuccess={setToken}
        onError={() => setToken("")}
        onExpire={() => setToken("")}
        options={{ theme: "light", size: "normal" }}
      />

      {/* API error */}
      {apiError && (
        <p role="alert" className="text-[13px] text-kinetic">
          {apiError}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[13px] font-medium tracking-editorial text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isLoading ? "Sending…" : <>Send Enquiry <span aria-hidden>→</span></>}
      </button>
    </form>
  );
}
