type InputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

export function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
      />
    </label>
  );
}