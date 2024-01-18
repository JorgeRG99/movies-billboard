export function Feature({ title, description, children }) {
  return (
    <div className="flex flex-col gap-7 items-center">
      {children}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="w-[80%] text-center">
        <p>{description}</p>
      </div>
    </div>
  );
}
