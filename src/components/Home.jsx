import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>MusTech</h1>
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

      <div className="home3" id="about">
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

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
