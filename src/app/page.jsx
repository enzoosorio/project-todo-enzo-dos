import { ButtonTodo } from "@/components/button";
import Link from "next/link";

export default function HeroPage() {
  return (
    <main className="w-2/3 mx-auto flex flex-col gap-10 items-center justify-center mt-20">
      <h1 className="text-3xl tracking-wide">Main Page</h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <p>Click on the button to login </p>
        <Link
          href={"/login"}
          className="bg-blue-600 rounded-md p-2 text-center w-40 hover:bg-blue-700 hover:scale-110 transition-all"
        >
          Login
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <p>Click on the button to register</p>
        <Link
          href={"/register"}
          className="bg-blue-600 rounded-md p-2 text-center w-40 hover:bg-blue-700 hover:scale-110 transition-all"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
