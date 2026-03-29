import Image from "next/image";
import { CONTACT_INFO_ITEMS } from "@/constants/contact";

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 7V12L15 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ContactInfoGrid() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
      {CONTACT_INFO_ITEMS.map((item) => (
        <div key={item.id} className="flex gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-[#c5a367] text-white">
            {item.icon === "clock" ? (
              <ClockIcon className="h-7 w-7" />
            ) : (
              <Image
                src={item.icon}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 brightness-0 invert"
              />
            )}
          </div>
          <div className="min-w-0 pt-0.5">
            <p className="text-sm font-bold uppercase tracking-wide text-[#c5a367]">
              {item.label}
            </p>
            <p className="mt-1 text-base font-normal text-black">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
