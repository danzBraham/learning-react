export default function Input({
  label,
  type,
  property,
  value,
  placeholder,
  handleChange,
}) {
  return (
    <div className="flex w-full flex-col justify-center gap-1">
      <label htmlFor={property} className="font-medium">
        {label}
      </label>
      <input
        type={type}
        name={property}
        id={property}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="rounded-md border-2 border-slate-700 px-3 py-2 text-sm text-black shadow-sm focus:outline-none"
      />
    </div>
  );
}
