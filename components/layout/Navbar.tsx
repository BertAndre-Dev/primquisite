"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
        <Link href="/" className="flex shrink-0 items-center gap-3">
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
                  className={`text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[#C8A168] ${
                    active ? "border-b-2 border-[#C8A168] pb-1" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex border border-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white/10"
          >
            Send us a message
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/40 text-white lg:hidden"
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
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </span>
          )}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[100] bg-[#231F20]/98 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-6 pb-10 pt-24">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-base font-semibold uppercase tracking-[0.2em] text-white ${
                        active ? "text-[#C8A168]" : ""
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
              className="mt-10 inline-flex w-full justify-center border border-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
              onClick={() => setOpen(false)}
            >
              Send us a message
            </Link>

            <button
              type="button"
              className="mt-auto inline-flex w-full justify-center rounded border border-white/40 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
