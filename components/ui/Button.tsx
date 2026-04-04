import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, className, ...props }, ref) {
    const mergedClassName = [
      "inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white",
      "transition-all duration-200 ease-out",
      "hover:opacity-90 active:scale-[0.97] motion-reduce:active:scale-100",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/45 focus-visible:ring-offset-2 focus-visible:transition-shadow",
      "disabled:opacity-60 disabled:active:scale-100",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} {...props} className={mergedClassName}>
        {children}
      </button>
    );
  },
);
