import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import "./style.css";

function Home(props) {
  const [rotate, setRotate] = useState(false);
  const [activeRotate, setActiveRotate] = useState("container");
  const [btnRotate, setBtnRotate] = useState("rotate-btn");

  const [navH3, setNavH3] = useState("nav-h3");
  const [h3First, setH3First] = useState("h3-hidden");
  const [h3Second, setH3Second] = useState("h3-hidden");
  const [h3Third, setH3Third] = useState("h3-hidden");

  const handleRotatePage = () => {
    setRotate(!rotate);

    if (rotate) {
      setActiveRotate("container active");
      setBtnRotate("rotate-btn btn-active");
      setNavH3("nav-h3");
      setH3First("h3-first");
      setH3Second("h3-second");
      setH3Third("h3-third");
    } else {
      setActiveRotate("container");
      setBtnRotate("rotate-btn btn-re-rotate");
      setNavH3("nav-h3 h3-hidden");
      setH3First("");
      setH3Second("");
      setH3Third("");
    }
  };
  return (
    <div>
      <div className={activeRotate}>
        <div className="rotate">
          <div className={btnRotate}>
            <TiDeleteOutline onClick={handleRotatePage} />
            <AiOutlineMenu onClick={handleRotatePage} />
          </div>
        </div>
        <div className="content">
          <div className="title">
            <h1>Amazing Article</h1>
          </div>
          <span>Florin Pop</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>
          <h3 className="title">My Dog</h3>
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
        </div>
      </div>
      <nav>
        <div className={navH3 + " " + h3First}>
          <FaHome className="mr-10" />
          <h3>home</h3>
        </div>
        <div className={navH3 + " " + h3Second}>
          <FaUser className="mr-10" />
          <h3>about</h3>
        </div>
        <div className={navH3 + " " + h3Third}>
          <IoMdMail className="mr-10" />
          <h3>contact</h3>
        </div>
      </nav>
    </div>
  );
}

export default Home;
