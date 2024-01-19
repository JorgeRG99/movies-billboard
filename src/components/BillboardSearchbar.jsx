import { Input } from "../shadcn/components/input";

export function BillboardSearchbar() {
  return (
    <div className="flex items-center gap-4 mb-12 w-full">
      <input
        type="text"
        placeholder="Search a certain film schedule"
        className="border-2 border-white rounded-lg h-10 placeholder-gray-400 bg-transparent w-[90%] px-4 text-white"
      />
      <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary-violet px-8 text-sm font-medium text-white shadow hover:opacity-70 duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
        Search
      </button>
    </div>
  );
}
