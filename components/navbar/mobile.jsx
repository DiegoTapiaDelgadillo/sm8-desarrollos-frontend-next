import clsx from "clsx";
import { Link } from "react-router-dom";
export default function Mobile({ className, pages, socialMedia, onClick }) {
  return (
    <div
      className={clsx(
        "sm:hidden grid grid-rows-2 items-center bg-black fixed h-full w-full z-40 animate-fade-left px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24",
        className
      )}
    >
      <div className=" w-full pt-56">
        {pages.map((items) => (
          <div className="py-8 border-b-2 border-neutral-500" key={items.text}>
            <Link
              to={items.rute}
              className=" text-2xl font-bold hover:text-white/50 ease-in-out duration-300 text-white"
              onClick={onClick}
            >
              {items.text}
            </Link>
          </div>
        ))}
      </div>
      <div className=" flex items-end justify-center h-full pb-12">
        {socialMedia.map((item) => (
          <div className="pl-4" key={item.name}>
            <a href={item.rute}>
              <img
                src={item.icon}
                alt=""
                className="w-8 h-8 hover:brightness-75 ease-in-out duration-300"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
