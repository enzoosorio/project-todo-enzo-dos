import { FetchById } from "@/utils/fetch"; // Importa la función FetchById desde el archivo donde está definida
import { FormEdit } from "@/components/formEdit";

export default async function UpdatePage({ searchParams }) {
  const idSearchParam = searchParams?.id || "";
  const result = await FetchById(idSearchParam);
  console.log(idSearchParam);
  console.log(result);

  return (
    <>
      <FormEdit task={result} />
    </>
  );
}
