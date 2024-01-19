import { Skeleton } from "../shadcn/components/skeleton";

export function MovieSkeleton() {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-center gap-20 py-40 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
      <div className="lg:w-[20%] w-[40%] flex flex-col items-center justify-center gap-3">
        <Skeleton className="w-full h-96 bg-gray-400 rounded-xl"></Skeleton>
        <Skeleton className="w-full h-12 bg-gray-400 rounded-xl"></Skeleton>
      </div>
      <div className="space-y-16 w-[60%]">
        <div className="space-y-2">
          <Skeleton className="h-12 bg-gray-400 w-full rounded-xl"></Skeleton>
          <div className="flex gap-4 items-center">
            <Skeleton className=" py-1 rounded-full w-16 h-6 bg-gray-400"></Skeleton>
            <Skeleton className="w-6 h-6 bg-gray-400 rounded-full"></Skeleton>
          </div>
        </div>
        <Skeleton className="h-24 bg-gray-400 w-full rounded-xl"></Skeleton>
        <div className="space-y-1 grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8">
          <div className="w-[8em] flex flex-col gap-2">
            <Skeleton className="h-3 bg-gray-400 w-[70%] rounded-xl"></Skeleton>
            <Skeleton className="h-5 bg-gray-400 w-full rounded-xl"></Skeleton>
          </div>
          <div className="w-[8em] flex flex-col gap-2">
            <Skeleton className="h-3 bg-gray-400 w-[70%] rounded-xl"></Skeleton>
            <Skeleton className="h-5 bg-gray-400 w-full rounded-xl"></Skeleton>
          </div>
          <div className="w-[8em] flex flex-col gap-2">
            <Skeleton className="h-3 bg-gray-400 w-[70%] rounded-xl"></Skeleton>
            <Skeleton className="h-5 bg-gray-400 w-full rounded-xl"></Skeleton>
          </div>
          <div className="w-[8em] flex flex-col gap-2">
            <Skeleton className="h-3 bg-gray-400 w-[70%] rounded-xl"></Skeleton>
            <Skeleton className="h-5 bg-gray-400 w-full rounded-xl"></Skeleton>
          </div>
          <div className="w-[8em] flex flex-col gap-2">
            <Skeleton className="h-3 bg-gray-400 w-[70%] rounded-xl"></Skeleton>
            <Skeleton className="h-5 bg-gray-400 w-full rounded-xl"></Skeleton>
          </div>
        </div>
      </div>
    </section>
  );
}
