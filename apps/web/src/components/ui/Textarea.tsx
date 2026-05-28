type TextareaProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function Textarea({
  label,
  name,
  placeholder,
  required = false,
  value,
  onChange,
}: TextareaProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        value={value}
        onChange={onChange}
        className="resize-none rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-gray-400 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--secondary)]"
      />
    </label>
  );
}
