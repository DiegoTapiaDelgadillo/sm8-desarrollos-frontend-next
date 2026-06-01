import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Button({ text, rute, className }) {
  return (
    <Link to={rute}>
      <button 
      className=" p-4 w-full sm:w-auto rounded-xl border border-black text-sm sm:text-base shadow-md hover:bg-black hover:text-white ease-in-out duration-300 bg-white"    
      >
        {text}
      </button>
    </Link>
  );
}
