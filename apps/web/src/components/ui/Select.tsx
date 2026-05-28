type SelectProps = {
  label: string;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

export function Select({ label, name, required = false, value, onChange, options }: SelectProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>

      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--secondary)]"
      >
        <option value="">Select a service</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
