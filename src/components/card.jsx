"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const CardTodo = async ({ dataTasks }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      localStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        menuVisible &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [menuVisible]);

  const handleContextMenu = (e, taskId) => {
    e.preventDefault();
    setMenuVisible(true);
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setSelectedTaskId(taskId);
  };

  const handleEdit = () => {
    if (selectedTaskId) {
      router.push(`/dashboard/create/edit?id=${selectedTaskId}`);
    }
  };

  const handleDelete = async () => {
    const resultDeletedTask = await fetch(`/api/task/${selectedTaskId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    router.refresh();
    console.log(resultDeletedTask);
    setMenuVisible(false);
  };

  const handleRegresar = () => {
    router.push("/");
  };

  return (
    <>
      {dataTasks &&
        dataTasks.map((task) => (
          <div
            key={task._id}
            className="bg-slate-700 w-80 h-44 md:w-96 md:h-48 text-orange-200 flex flex-col justify-between items-start rounded-md p-2 shadow-[0_30px_60px_15px_rgb(255,255,255,0.11)]"
            onContextMenu={(e) => handleContextMenu(e, task._id)}
          >
            <div>
              <h1 className="mt-2 w-max text-red-400 text-xl overflow-auto text-pretty">
                {task.title}
              </h1>
              <p className="mt-3 max-h-[70px] overflow-auto text-pretty">
                {task.description}
              </p>
            </div>
            <div className="mb-1 flex justify-between w-full">
              <p>Desde: {task.from.toISOString().split("T")[0]}</p>
              <p>Hasta: {task.to.toISOString().split("T")[0]}</p>
            </div>
          </div>
        ))}
      {menuVisible && (
        <div
          ref={menuRef}
          className="absolute bg-slate-800 shadow-md rounded p-2 w-28 h-20 flex flex-col justify-between opacity-75"
          style={{ top: menuPosition.y, left: menuPosition.x }}
        >
          <button
            className="hover:font-bold hover:bg-slate-800 transition-all"
            onClick={handleEdit}
          >
            Editar
          </button>
          <button
            className="hover:font-bold hover:bg-slate-800 transition-all"
            onClick={selectedTaskId ? handleDelete : ""}
          >
            Eliminar
          </button>
        </div>
      )}

      <button onClick={handleRegresar}>Regresar</button>
    </>
  );
};
