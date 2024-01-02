import React from "react";
import vg from "../assets/2.webp";

function Home() {
  return (
    <>
      <div className="home">
        <main>
          <h1>MusaTech</h1>
          <p>Solution to all of my problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are a leading tech company whose aim is to increase
            the problem solving ability in children
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            omnis quidem! Accusamus cum nesciunt explicabo praesentium rerum
            eligendi nostrum ut necessitatibus nobis quis, corrupti sint vel,
            placeat aspernatur. Impedit, libero? Aperiam sequi deleniti, amet
            repudiandae tempora dolor assumenda odio incidunt nesciunt
            voluptatem, et architecto perspiciatis iusto veniam, cumque quisquam
            numquam quia quod odit. Ut provident quos obcaecati minus officiis
            sit. Voluptatem, quae mollitia. In, voluptatibus aut maiores optio
            placeat maxime, officia facere sit, temporibus quod fuga voluptatum
            nemo quos molestias ea esse ipsa nam ut quas illo molestiae repellat
            repellendus!
          </p>
        </div>
      </div>

      <div className="home4">
       <h1>Brands</h1>
      </div>
    </>
  );
}

export default Home;
