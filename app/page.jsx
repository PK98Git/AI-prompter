import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore and share
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Unlock Your Creativity with AI-Powered Writing Prompts. Our website
        offers a vast collection of writing prompts powered by artificial
        intelligence, designed to inspire your creativity and ignite your
        imagination.
      </p>
      <Feed/>
    </section>
  );
}

export default Home