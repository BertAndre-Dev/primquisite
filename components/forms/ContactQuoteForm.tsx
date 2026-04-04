"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { EASE_OUT } from "@/lib/motion";

const inputClass =
  "w-full border-0 border-b border-neutral-900 bg-transparent py-2.5 text-base text-neutral-900 outline-none ring-0 transition-[border-color,box-shadow] duration-200 ease-out placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-0 motion-reduce:transition-none";

export function ContactQuoteForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const reduce = useReducedMotion();

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
    <div className="mx-auto w-full max-w-3xl py-14 xl:max-w-4xl">
      <h2 className="mb-14 text-center text-2xl font-bold uppercase leading-relaxed tracking-[0.15em] text-[#CBA35C] md:text-3xl">
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
            className={`${inputClass} focus-visible:border-[#CBA35C]/80`}
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
            className={`${inputClass} focus-visible:border-[#CBA35C]/80`}
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
            className={`${inputClass} resize-y focus-visible:border-[#CBA35C]/80`}
          />
        </div>

        <div className="flex justify-center pt-2">
          <motion.button
            type="submit"
            disabled={state === "submitting"}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "tween", duration: 0.1, ease: EASE_OUT }}
            className="w-[65%] min-w-[200px] max-w-md cursor-pointer rounded-md border-0 bg-[#CBA35C] px-4 py-4 text-base font-medium text-white transition-opacity duration-200 ease-out hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBA35C]/70 focus-visible:ring-offset-2 focus-visible:transition-shadow"
          >
            {state === "submitting" ? "Sending..." : "Submit"}
          </motion.button>
        </div>

        <div className="min-h-[1.5rem]">
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.p
                key="success"
                role="status"
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
                className="text-center text-sm text-green-700"
              >
                Message sent successfully.
              </motion.p>
            ) : null}
            {state === "error" ? (
              <motion.p
                key="error"
                role="alert"
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
                className="text-center text-sm text-red-700"
              >
                Unable to send message.
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </form>
    </div>
  );
}
