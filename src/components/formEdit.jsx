"use client";

export const FormEdit = ({ task, idPathname }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      console.log(data);

      const res = await fetch(`/api/task/${task._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (res.ok) {
        const finalData = await res.json();
        console.log(finalData);
        window.location.href = "/";
      } else {
        console.error("Error updating task:", res.status, res.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="my-5 p-5 rounded-2xl md:mt-8 bg-slate-800 w-4/5 md:w-1/2 mx-auto flex flex-col gap-3"
    >
      {task ? (
        <>
          <h1 className="text-center text-3xl">EDIT Task Page</h1>
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
                  defaultValue={task.title}
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
                  defaultValue={task.description}
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
                  defaultValue={formatDate(task.from)}
                />
              </label>
              <label className="text-lg">
                Hasta
                <input
                  className="block w-48 text-black"
                  type="date"
                  required
                  name="to"
                  defaultValue={formatDate(task.to)}
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
        </>
      ) : (
        <div className="bg-red-500 z-20">
          no hay resultados para el id {idPathname}
        </div>
      )}
    </form>
  );
};
