"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ConsentValue = "accept" | "reject";

const STORAGE_KEY = "cookie_consent_v1";
const TTL_MS = 7 * 24 * 60 * 60 * 1000;

function now() {
  return Date.now();
}

function readConsent(): ConsentValue | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { value?: ConsentValue; expiresAt?: number };
    if (!parsed.value || !parsed.expiresAt) return null;
    if (parsed.expiresAt < now()) return null;
    return parsed.value;
  } catch {
    return null;
  }
}

function writeConsent(value: ConsentValue) {
  const payload = { value, expiresAt: now() + TTL_MS };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return readConsent() === null;
  });

  const actions = useMemo(
    () => [
      {
        key: "reject" as const,
        label: "Reject All",
        className:
          "inline-flex items-center justify-center rounded-md border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white hover:bg-white/10",
      },
      {
        key: "accept" as const,
        label: "Accept All",
        className:
          "inline-flex items-center justify-center rounded-md bg-[#D0AA63] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white hover:opacity-95",
      },
    ],
    [],
  );

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] text-center">
      <div className="mx-auto w-full max-w-4xl px-4 pb-4 md:px-6 text-center">
        <div className="rounded-lg bg-[#231F20]/95 p-4 text-white shadow-2xl backdrop-blur md:p-5">
          <div className="flex flex-col gap-4 md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#D0AA63]">
                Cookie Notice
              </p>
              <p className="mt-2 text-sm text-white/90">
                We use cookies to improve your experience. You can accept or
                reject non-essential cookies. Read our{" "}
                <Link className="underline text-[#D0AA63] hover:text-[#F0E0A0] cursor-pointer" href="/cookie-notice-policy" target="_blank" rel="noopener noreferrer">
                  Cookie Notice &amp; Policy
                </Link>{" "}
                and{" "}
                <Link className="underline text-[#D0AA63] hover:text-[#F0E0A0] cursor-pointer" href="/privacy-notice" target="_blank" rel="noopener noreferrer">
                  Privacy Notice
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              {actions.map((a) => (
                <button
                  key={a.key}
                  type="button"
                  className={a.className + " cursor-pointer"}
                  onClick={() => {
                    writeConsent(a.key);
                    setVisible(false);
                  }}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

