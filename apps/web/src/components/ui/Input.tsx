type InputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
}: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="resize-none rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--secondary)]"
      />
    </label>
  );
}
