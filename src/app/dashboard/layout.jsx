import { Inter } from "next/font/google";
import "../globals.css";
import { ButtonTodo } from "@/components/button";
// import { DeleteAllTodos } from "@/utils/fetch";
// import { useStore } from "@/utils/storeZustand";

export const metadata = {
  title: "Dashboard TODO",
  description: "Dashboard TODO list ",
};

export default function DashboardLayout({ children }) {
  // if (useStore.getState().deleteAllTodosState) {
  //   DeleteAllTodos();
  // }

  return (
    <>
      <nav className="mt-12 w-4/5 mx-auto flex justify-between items-center">
        <ButtonTodo type={"addTodo"}>Add ToDo</ButtonTodo>

        <ButtonTodo type={"deleteTodos"}>Delete ALL ToDos</ButtonTodo>
      </nav>
      <hr className="mt-10 custom-hr mx-auto" />
      {children}
    </>
  );
}
