"use client";

import React from "react";
import { redirect } from "next/navigation";

const CreatePage = () => {
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      console.log(data);

      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });

      const finalData = await res.json();
      console.log(finalData);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="my-5 p-5 rounded-2xl md:mt-8 bg-slate-800 w-4/5 md:w-1/2 mx-auto flex flex-col gap-3"
    >
      <h1 className="text-center text-3xl">Create Task Page</h1>
      <div className="flex flex-col gap-10 md:gap-16 my-6">
        <div className="flex flex-col md:flex-row justify-between items-center px-3 gap-7">
          <label className="text-lg">
            Titulo
            <input
              className="block w-48 text-black"
              type="text"
              required
              maxLength={35}
              name="title"
            />
          </label>
          <label className="text-lg">
            Descripcion
            <input
              className="block w-48 text-black"
              type="text"
              required
              maxLength={250}
              name="description"
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-3 gap-7">
          <label className="text-lg">
            Desde
            <input
              className="block w-48 text-black"
              type="date"
              required
              name="from"
            />
          </label>
          <label className="text-lg">
            Hasta
            <input
              className="block w-48 text-black"
              type="date"
              required
              name="to"
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-400 w-max py-2 px-5 rounded-md hover:bg-red-500 transition-all mx-auto"
      >
        Enviar
      </button>
    </form>
  );
};

export default CreatePage;
