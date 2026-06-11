type InputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  error?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  error,
  inputMode,
  maxLength,
  onChange,
}: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[var(--muted)]">
        {label}
        {required && <span className="text-[var(--primary)]"> *</span>}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        inputMode={inputMode}
        maxLength={maxLength}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`rounded-xl border bg-[var(--card)] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-gray-400 focus:ring-4 ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-50"
            : "border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--secondary)]"
        }`}
      />

      {error && (
        <p id={`${name}-error`} className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </label>
  );
}
