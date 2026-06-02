type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: ButtonVariant;
  isLoading?: boolean;
};

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]",
  secondary:
    "border border-[var(--border)] bg-[var(--card)] text-foreground hover:border-[var(--primary)]",
};

export function Button({
  children,
  type = "button",
  disabled = false,
  variant = "primary",
  isLoading = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 ${buttonVariants[variant]}`}
    >
      {isLoading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}

      {children}
    </button>
  );
}
