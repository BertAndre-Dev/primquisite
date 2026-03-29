import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, className, ...props }: ButtonProps) {
  const mergedClassName = [
    "inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} className={mergedClassName}>
      {children}
    </button>
  );
}
