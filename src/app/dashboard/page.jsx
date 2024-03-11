import Image from "next/image";
import { CardTodo } from "@/components/card";
import { FetchTasks } from "@/utils/fetch";
import { Suspense } from "react";
import SkeletonCard from "@/components/skeletonCard";

export default async function Home() {
  const dataTasks = await FetchTasks();

  return (
    <main className="bg-gray-800 w-full h-auto p-6 mx-auto">
      <div className="mx-auto flex flex-col md:grid md:grid-cols-3 gap-y-6 justify-center 2xl:w-3/4  items-center">
        <Suspense fallback={<SkeletonCard />}>
          <CardTodo dataTasks={dataTasks} />
        </Suspense>
      </div>
    </main>
  );
}
