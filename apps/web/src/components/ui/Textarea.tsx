type TextareaProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export function Textarea({ label, name, placeholder, required = false }: TextareaProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
      />
    </label>
  );
}