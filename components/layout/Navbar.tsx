"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EASE_OUT } from "@/lib/motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#231F20]/55 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 transition-opacity duration-200 ease-out hover:opacity-90 active:scale-[0.98] motion-reduce:active:scale-100"
        >
          <Image
            src="/logo.svg"
            alt="Primquisite Real Estate"
            width={44}
            height={56}
            className="h-11 w-auto"
            priority
          />
          <span className="flex flex-col leading-tight text-white">
            <span className="text-base font-bold tracking-wide md:text-lg">
              Primquisite
            </span>
            <span className="text-xs font-normal text-white/90 md:text-sm">
              Real Estate
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 ease-out hover:text-[#C8A168] ${
                    active ? "text-[#C8A168]" : ""
                  }`}
                >
                  <span className="relative z-[1]">{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 z-0 h-0.5 w-full origin-left rounded-full bg-[#C8A168] transition-transform duration-200 ease-out ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex border border-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 ease-out hover:bg-white/10 active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A168]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#231F20]/55"
          >
            Send us a message
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/40 text-white transition-all duration-200 ease-out hover:bg-white/10 active:scale-[0.96] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <span className="text-2xl leading-none" aria-hidden>
              ×
            </span>
          ) : (
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-0.5 w-6 bg-white transition-transform duration-200" />
              <span className="block h-0.5 w-6 bg-white transition-transform duration-200" />
              <span className="block h-0.5 w-6 bg-white transition-transform duration-200" />
            </span>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] bg-[#231F20]/98 lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? false : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
          >
            <motion.div
              className="mx-auto flex h-full w-full max-w-7xl flex-col px-6 pb-10 pt-24"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 10 }}
              transition={{ duration: 0.32, ease: EASE_OUT, delay: reduce ? 0 : 0.04 }}
            >
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-base font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ease-out ${
                          active ? "text-[#C8A168]" : "text-white hover:text-[#C8A168]/90"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/contact"
                className="mt-10 inline-flex w-full justify-center border border-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 ease-out hover:bg-white/10 active:scale-[0.98] motion-reduce:active:scale-100"
                onClick={() => setOpen(false)}
              >
                Send us a message
              </Link>

              <button
                type="button"
                className="mt-auto inline-flex w-full justify-center rounded border border-white/40 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-200 ease-out hover:bg-white/10 active:scale-[0.98] motion-reduce:active:scale-100"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
