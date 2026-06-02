type SelectProps = {
  label: string;
  name: string;
  required?: boolean;
  value?: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

export function Select({
  label,
  name,
  required = false,
  value,
  error,
  onChange,
  options,
}: SelectProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[var(--muted)]">
        {label}
        {required && <span className="text-[var(--primary)]"> *</span>}
      </span>

      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`rounded-xl border bg-[var(--card)] px-4 py-3 text-sm text-foreground outline-none transition focus:ring-4 ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-50"
            : "border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--secondary)]"
        }`}
      >
        <option value="">Select a service</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p id={`${name}-error`} className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </label>
  );
}
