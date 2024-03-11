"use client";
import { arimo, jost } from "@/utils/fonts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/validations/userSchema";
import FormField from "@/components/inputField";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmitForm = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={onSubmitForm}
      className={`bg-gray-700 w-1/3 rounded-lg h-96 mx-auto flex flex-col justify-center items-center mt-10 ${jost.className}`}
    >
      <h1 className={`text-4xl mb-9 `}>Iniciar Sesión</h1>
      <div className="flex flex-col justify-center items-center w-full ">
        <label className=" w-1/2 -mt-5">
          Email
          <FormField
            type="email"
            placeholder="user123@hotmail.com"
            name="email"
            register={register}
            error={errors.email}
          />
        </label>

        <label className="w-1/2 mt-5">
          Contraseña
          <FormField
            type="password"
            placeholder="******"
            name="password"
            register={register}
            error={errors.password}
          />
        </label>

        <button
          type="submit"
          className="mt-10 bg-blue-600 rounded-md p-2 text-center w-40 hover:bg-blue-700 hover:scale-110 transition-all"
        >
          Login
        </button>
      </div>
    </form>
  );
}
