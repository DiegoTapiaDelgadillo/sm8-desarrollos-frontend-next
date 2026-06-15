import Modal from "../modal";

type CardProyectosProps = {
  img: string;
  title: string;
  textBody: string;
  imagenes: string[];
};

export default function ProjectCard({
  img,
  title,
  textBody,
  imagenes,
}: CardProyectosProps) {
  return (
    <div data-aos="fade-zoom-in" data-aos-delay="200">
      <figure>
        <img src={img} alt={title} className="rounded-xl" />
        <h1 className="pt-4 text-xl">{title}</h1>
        <h2 className="text-xs lg:text-base text-neutral-500 text-justify py-4">
          {textBody}
        </h2>
        <Modal imagenes={imagenes} />
      </figure>
    </div>
  );
}
