export function Feature({ title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        alt="Icon"
        className="mb-4"
        height="100"
        src="/placeholder.svg"
        style={{
          aspectRatio: "100/100",
          objectFit: "cover",
        }}
        width="100"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
