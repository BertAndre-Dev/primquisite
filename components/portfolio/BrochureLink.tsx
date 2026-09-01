"use client";

import Image from "next/image";

type BrochureLinkProps = {
  href: string;
  downloadName?: string;
};

const buttonClassName =
  "mt-10 inline-flex w-fit items-center gap-2 rounded-md bg-[#CBA668] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:opacity-95 active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CBA668]/70 focus-visible:ring-offset-2";

export function BrochureLink({ href, downloadName }: BrochureLinkProps) {
  function handleClick() {
    const link = document.createElement("a");
    link.href = href;
    link.download = downloadName ?? "";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={buttonClassName}
    >
      Read Project Brochure
      <Image
        src="/arrow_outward.svg"
        alt=""
        width={24}
        height={24}
        aria-hidden
      />
    </a>
  );
}
