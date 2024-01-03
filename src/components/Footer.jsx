import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <h1>MusaTech</h1>
        <p>@all rights reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a
            href="https://www.youtube.com/channel/UCIWccK7zIhP58p7mJZIgajw"
            target={"blank"}
          >
            Youtube
          </a>
          <a
            href="https://www.instagram.com/__mustafasarangpurwala__/"
            target={"blank"}
          >
            {" "}
            Instagaram
          </a>
          <a href="https://github.com/HIDZI123" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
