import React from "react";
import { useState } from "react";
import "./style.css";

function Home(props) {
  const [rotate, setRotate] = useState(false);
  const [activeRotate, setActiveRotate] = useState("container");

  const handleRotatePage = () => {
    setRotate(!rotate);
    if (rotate) {
      setActiveRotate("container active");
    } else {
      setActiveRotate("container");
    }
  };
  return (
    <div className={activeRotate}>
      <div className="content">
        <div className="rotate">
          <button onClick={handleRotatePage}>Rotate</button>
        </div>
        <h1>Amazing Article</h1>
        <span>Florin Pop</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
          dolor omnis atque fuga labore modi veritatis porro laborum minus,
          illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur
          mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem
          provident natus veritatis molestiae cumque quod voluptates ab non,
          tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium
          iure aliquam rerum sint nam quas dolor dignissimos in error placeat
          quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe
          voluptates laudantium. Ducimus consequuntur perferendis consequatur
          nobis exercitationem molestias fugiat commodi omnis. Asperiores quia
          tenetur nemo ipsa.
        </p>
        <h3>My Dog</h3>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt="cuteDog"
        />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
          deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
          facere earum unde harum. Ea culpa veritatis magnam at aliquid.
          Perferendis totam placeat molestias illo laudantium? Minus id minima
          doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
          temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
          explicabo provident. Voluptates sint, neque fuga cum illum, tempore
          autem maxime similique laborum odio, magnam esse. Aperiam?
        </p>
        <nav>
          <h3>home</h3>
          <h3>about</h3>
          <h3>contact</h3>
        </nav>
      </div>
    </div>
  );
}

export default Home;
