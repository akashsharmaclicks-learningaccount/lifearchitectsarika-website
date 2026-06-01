type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: ButtonVariant;
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
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`rounded-lg px-6 py-3 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
}
