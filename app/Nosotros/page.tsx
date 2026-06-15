import Mural from "../../components/mural";
import Collapse from "../../components/collapse";
import CardContact from "../../components/cardContact";
import ScrollToTop from "@/components/scrollToTop";
import { aboutSections } from "@/data/company";

export default function NosotrosPage() {
  return (
    <>
      <ScrollToTop />
      <Mural Fondo="/assets/IZT.jpg" title="Conoce a SM8 Desarrollos" />
      <div className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-white py-12 lg:py-24 xl:py-32">
        <h1 className="text-center text-xl sm:text-3xl lg:text-6xl pb-0 2xl:py-24">
          Estaremos contigo desde los estudios, análisis y planeación; hasta la
          entrega final del proyecto u obra
        </h1>

        <div className="py-12">
          {aboutSections.map((item) => (
            <Collapse title={item.title} text={item.text} key={item.title} />
          ))}
        </div>

        <h1
          className="text-center text-xl sm:text-3xl lg:text-6xl pb-0 2xl:py-24"
          data-aos="zoom-in"
        >
          En SM8 Desarrollos cada línea, en cada estructura, damos forma a
          sueños y creamos legados atemporales.
        </h1>
      </div>
      <CardContact img="/assets/Bitte6.webp" />
    </>
  );
}
