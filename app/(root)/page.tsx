import SearchForm from "../../components/SearchForm";

export default  async function Home({searchParams}: {
  searchParams: Promise<{ query: string }>;
}) {

    const qurey = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
           Furniture & Art that Reflect Your Personal Style
            </h1>
            <p className="sub-heading !max-w-3xl">
            Monetize Your Creativity: Upload Your Art and Start Earning with a Global Community of Creatives!
            </p>
            <SearchForm qurey={qurey}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {qurey ? `Search results for ${ qurey}`: "All Frames"}
        </p>

      </section>



    </>
  )
}