"use client";

import { useState } from "react";

export function ContactQuoteForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(formData: FormData) {
    setState("submitting");

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setState(response.ok ? "success" : "error");
  }

  return (
    <div className="mx-auto w-full max-w-3xl xl:max-w-4xl py-14">
      <h2 className="mb-14 text-center text-2xl md:text-3xl font-bold uppercase leading-relaxed tracking-[0.15em] text-[#CBA35C]">
        Interested in owning or investing?
      </h2>

      <form action={handleSubmit} className="space-y-12">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-bold uppercase tracking-wide text-neutral-900"
          >
            Name
          </label>
          <input
            id="contact-name"
            required
            name="name"
            autoComplete="name"
            className="w-full border-0 border-b border-neutral-900 bg-transparent py-2.5 text-base text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-bold uppercase tracking-wide text-neutral-900"
          >
            Email
          </label>
          <input
            id="contact-email"
            required
            type="email"
            name="email"
            autoComplete="email"
            className="w-full border-0 border-b border-neutral-900 bg-transparent py-2.5 text-base text-neutral-900 outline-none ring-0 focus:border-neutral-900"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="mb-4 block text-sm font-bold uppercase tracking-wide text-neutral-900"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            required
            name="message"
            rows={5}
            className="w-full resize-y border-0 border-b border-neutral-900 bg-transparent py-2.5 text-base text-neutral-900 outline-none ring-0 focus:border-neutral-900"
          />
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-[65%] min-w-[200px] max-w-md rounded-md border-0 bg-[#CBA35C] px-4 py-4 text-base font-medium text-white transition hover:opacity-95 disabled:opacity-60"
          >
            {state === "submitting" ? "Sending..." : "Submit"}
          </button>
        </div>

        {state === "success" ? (
          <p className="text-center text-sm text-green-700">Message sent successfully.</p>
        ) : null}
        {state === "error" ? (
          <p className="text-center text-sm text-red-700">Unable to send message.</p>
        ) : null}
      </form>
    </div>
  );
}
