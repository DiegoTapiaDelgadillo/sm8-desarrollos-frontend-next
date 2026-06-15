import Button from "@/components/button";
import TextBody from "@/components/textBody";
import TextTitles from "@/components/textTitles";

type HomeSectionProps = {
  title: string;
  body: string;
  buttonText: string;
  route: string;
  image: string;
};

export default function HomeSection({
  title,
  body,
  buttonText,
  route,
  image,
}: HomeSectionProps) {
  return (
    <div className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-white py-12 lg:py-24 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
      <div className="block sm:hidden">
        <img src={image} alt={title} className="w-full rounded-xl" />
      </div>
      <div data-aos="zoom-in">
        <TextTitles text={title} />
        <TextBody text={body} />
        <Button text={buttonText} route={route} />
      </div>
      <div className="hidden sm:block">
        <img src={image} alt={title} className="w-full shadow-xl rounded-xl" />
      </div>
    </div>
  );
}
