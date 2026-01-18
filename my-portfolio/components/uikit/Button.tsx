import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "success" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-bottle-green text-white hover:bg-bottle-green-hover focus:ring-bottle-green",
    secondary:
      "bg-white text-bottle-green border border-bottle-green hover:bg-bottle-green-light focus:ring-bottle-green",
    success:
      "bg-bottle-green text-white hover:bg-bottle-green-dark focus:ring-bottle-green",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Spinner */}
      {isLoading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      )}

      {!isLoading && leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </button>
  );
}
