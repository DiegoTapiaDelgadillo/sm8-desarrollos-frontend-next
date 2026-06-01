import { Link } from "react-router-dom";
import Logo from "../../assets/SM8Desarrollos.svg";
import BurgerButton from "../burgerButton";
import CloseButton from "../closeButton";
import { useState, useEffect } from "react";
import Mobile from "./mobile";

export default function Navbar({ pages, socialMedia }) {
  const [openMobile, setOpneMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const showBurger = () => {
    setOpneMobile(!openMobile);
    console.log(openMobile);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`py-4 px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex justify-between items-center ${
          scrolling
            ? "bg-black ease-in-out duration-300"
            : "bg-transparent ease-in-out duration-300"
        }  fixed w-full z-50`}
      >
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-24" />
        </Link>
        <div className=" sm:flex items-center hidden">
          {pages.map((item) => (
            <div key={item.text} className=" pl-8">
              <Link
                to={item.rute}
                className=" text-white hover:text-white/50 ease-in-out duration-300 text-lg"
              >
                {item.text}
              </Link>
            </div>
          ))}
          <p className=" text-white text-xl pl-8">|</p>
          {socialMedia.map((item) => (
            <div className="pl-4" key={item.name}>
              <a href={item.rute} target="_blank">
                <img
                  src={item.icon}
                  alt=""
                  className="w-6 h-6 hover:brightness-75 ease-in-out duration-300"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="block sm:hidden">
          <BurgerButton
            onClick={showBurger}
            className={openMobile ? "hidden" : "block"}
          />
          <CloseButton
            onClick={showBurger}
            className={openMobile ? "block" : "hidden"}
          />
        </div>
      </nav>
      <Mobile
        className={openMobile ? "block" : "hidden"}
        pages={pages}
        socialMedia={socialMedia}
        onClick={showBurger}
      />
    </>
  );
}
