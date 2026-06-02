type TextareaProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Textarea({
  label,
  name,
  placeholder,
  required = false,
  value,
  error,
  onChange,
}: TextareaProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-[var(--muted)]">
        {label}
        {required && <span className="text-[var(--primary)]"> *</span>}
      </span>

      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`resize-none rounded-xl border bg-[var(--card)] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-gray-400 focus:ring-4 ${
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
