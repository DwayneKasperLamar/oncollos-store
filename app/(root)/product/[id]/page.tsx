export const experimental_ppr =true;

const page = async ({ params }: {params: Promise<{ id: string}>}) => {
  const id = (await params.)id;

  return (
      <>
      
          <h1 className="text-3xl"> Frame number {id}</h1>
      </>
  )
}

export default page