type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({ children, type = "button", disabled = false }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  );
}