import { Link } from "react-router-dom";
import Logo from "../../assets/SM8Desarrollos.svg";
export default function Footer({ socialMedia, pages }) {
  return (
    <footer className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-black py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 pb-8">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-24" />
          </Link>
        </div>
        <div>
          <p className=" text-white font-bold text-xl">Menú</p>
          {pages.map((item) => (
            <div key={item.text}>
              <Link
                to={item.rute}
                className=" text-white hover:text-white/50 ease-in-out duration-300 text-sm"
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <p className=" text-white font-bold text-xl pb-1">Más de SM8</p>
          <a
            href="https://www.sm8.com.mx/"
            target="_blank"
            className=" text-white text-sm hover:text-white/50 ease-in-out duration-300"
          >
            SM8 México
          </a>
          <br />
          <a
            href="https://www.sm8.es/"
            target="_blank"
            className=" text-white text-sm hover:text-white/50 ease-in-out duration-300"
          >
            SM8 España
          </a>
        </div>
        <div>
          <p className=" text-white font-bold text-xl pb-4">Redes Sociales</p>
          <div className=" flex">
            {socialMedia.map((item) => (
              <div className=" pr-4" key={item.name}>
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
        </div>
      </div>
      <div className=" border-t border-neutral-500 flex justify-between w-full py-4 items-center">
        <p className=" text-white">© 2024 SM8, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
