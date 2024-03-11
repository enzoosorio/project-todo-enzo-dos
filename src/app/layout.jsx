import { Inter } from "next/font/google";
import "./globals.css";
import { jost } from "@/utils/fonts";
import Link from "next/link";
import { DeleteAllTodos } from "@/utils/fetch";
import { useStore } from "@/utils/storeZustand";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login",
  description: "Login to the TODO list app",
};

export default function RootLayout({ children }) {
  if (useStore.getState().deleteAllTodosState) {
    DeleteAllTodos();
  }

  return (
    <html lang="en">
      <body
        className={`${inter.className}  w-full h-full bg-gray-800 text-white `}
      >
        <header className="mt-10">
          <div className="w-max mx-auto flex flex-col items-center justify-center">
            <Link
              href={"/dashboard"}
              className={`text-7xl text-blue-200 ${jost.className}`}
            >
              TODO LIST
            </Link>
            <h3 className={`text-lg text-blue-300 ${jost.className}`}>
              Right-click on cards to edit and delete.
            </h3>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
