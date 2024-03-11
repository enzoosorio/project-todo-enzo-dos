"use client";
import { useRouter } from "next/navigation";
import { useStore } from "zustand";

export const ButtonTodo = ({ type, children }) => {
  const router = useRouter();

  const handleClickCreateTask = () => {
    router.push("/dashboard/create");
  };

  const handleDeleteAllTodos = () => {
    const respuesta = window.confirm("¿Quieres continuar?");

    if (respuesta) {
      // agregar un estado global que recupere el estado de la respuesta y ejecutar el delete
      //en el layout.jsx, aca no se puede, me imagino que es porque este es un componente de cliente
      // y necesito uno del servidor (layout es servidor)
      useStore.setState({ deleteAllTodosState: true });

      console.log("El usuario ha seleccionado Aceptar.");
    } else {
      console.log("El usuario ha seleccionado Cancelar.");
      return;
    }
  };

  return (
    <>
      <button
        onClick={
          type === "addTodo" ? handleClickCreateTask : handleDeleteAllTodos
        }
        className="bg-blue-600 rounded-md p-2 text-center w-40 hover:bg-blue-700 hover:scale-110 transition-all"
      >
        {children}
      </button>
    </>
  );
};
