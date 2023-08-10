import Feed from "@components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Promts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
        maiores. Nobis ex odio aspernatur quidem? Doloribus molestiae corrupti
        repellat, sint quidem adipisci quam dolorum ipsum hic laborum eum rem
        quas.
      </p>
      <Feed />
    </section>
  );
}

export default Home;
