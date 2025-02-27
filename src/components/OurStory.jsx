import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story" id="about">
      <article className="our-story-description">
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </p>
      </article>
      <figure className="our-story-chefs">
        <img src="/images/Mario and Adrian A.jpg" alt="Two chefs laughing in their restaurant's kitchen." />
        <figcaption>Mario and Adrian laughing in the kitchen</figcaption>

        <img src="/images/Mario and Adrian B.jpg" alt="Two chefs discussing menu in their restaurant's kitchen." />
        <figcaption>Mario and Adrian planning the restaurant's menu</figcaption>
      </figure>
    </section>
  );
};

export default OurStory;
