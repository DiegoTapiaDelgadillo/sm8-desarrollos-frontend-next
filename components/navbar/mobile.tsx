import Link from "next/link";
import clsx from "clsx";

type PageItem = {
  text: string;
  rute: string;
};

type SocialMediaItem = {
  rute: string;
  name: string;
  icon: string;
};

type MobileProps = {
  className?: string;
  pages: PageItem[];
  socialMedia: SocialMediaItem[];
  onClick: () => void;
};

export default function Mobile({
  className,
  pages,
  socialMedia,
  onClick,
}: MobileProps) {
  return (
    <div
      className={clsx(
        "sm:hidden grid grid-rows-2 items-center bg-black fixed h-full w-full z-40 animate-fade-left px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24",
        className
      )}
    >
      <div className="w-full pt-56">
        {pages.map((item) => (
          <div className="py-8 border-b-2 border-neutral-500" key={item.text}>
            <Link
              href={item.rute}
              className="text-2xl font-bold hover:text-white/50 ease-in-out duration-300 text-white"
              onClick={onClick}
            >
              {item.text}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-center h-full pb-12">
        {socialMedia.map((item) => (
          <div className="pl-4" key={item.name}>
            <a
              href={item.rute}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 hover:brightness-75 ease-in-out duration-300"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}