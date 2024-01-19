import { Skeleton } from "../shadcn/components/skeleton";

export default function BillboardSkeleton() {
  return (
    <section className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <ul className="grid grid-cols-billboard gap-8">
        <li
          key={crypto.randomUUID()}
          className="rounded-xl min-w-[5em] min-h-[25em] flex items-center justify-center"
        >
          <Skeleton className="h-full w-full bg-gray-400" />
        </li>
        <li
          key={crypto.randomUUID()}
          className="rounded-xl min-w-[5em] min-h-[25em] flex items-center justify-center"
        >
          <Skeleton className="h-full w-full bg-gray-400" />
        </li>
        <li
          key={crypto.randomUUID()}
          className="rounded-xl min-w-[5em] min-h-[25em] flex items-center justify-center"
        >
          <Skeleton className="h-full w-full bg-gray-400" />
        </li>
        <li
          key={crypto.randomUUID()}
          className="rounded-xl min-w-[5em] min-h-[25em] flex items-center justify-center"
        >
          <Skeleton className="h-full w-full bg-gray-400" />
        </li>
        <li
          key={crypto.randomUUID()}
          className="rounded-xl min-w-[5em] min-h-[25em] flex items-center justify-center"
        >
          <Skeleton className="h-full w-full bg-gray-400" />
        </li>
        <li
          key={crypto.randomUUID()}
          className="rounded-xl min-w-[5em] min-h-[25em] flex items-center justify-center"
        >
          <Skeleton className="h-full w-full bg-gray-400" />
        </li>
        <li
          key={crypto.randomUUID()}
          className="rounded-xl min-w-[5em] min-h-[25em] flex items-center justify-center"
        >
          <Skeleton className="h-full w-full bg-gray-400" />
        </li>
        <li
          key={crypto.randomUUID()}
          className="rounded-xl min-w-[5em] min-h-[25em] flex items-center justify-center"
        >
          <Skeleton className="h-full w-full bg-gray-400" />
        </li>
      </ul>
    </section>
  );
}
