import Mural from "../../components/mural";
import Fondo from "../../assets/cp.webp";
import CardProyect from "../../components/cardProyect";
import ScrollTop from "../../hooks/scrollTop";
import Bitte from "../../assets/Bitte1.webp";
import Bitte2 from "../../assets/Bitte2.webp";
import Bitte3 from "../../assets/Bitte3.webp";
import Bitte4 from "../../assets/Bitte4.webp";
import Bitte5 from "../../assets/Bitte5.webp";
import Bitte6 from "../../assets/Bitte6.webp";
import Bitte7 from "../../assets/Bitte7.webp";
import Bitte8 from "../../assets/Bitte8.webp";
import Bitte9 from "../../assets/Bitte9.webp";
import Bitte10 from "../../assets/Bitte10.webp";
import Bitte11 from "../../assets/Bitte11.webp";
import Bitte12 from "../../assets/Bitte12.webp";
import Bitte13 from "../../assets/Bitte13.webp";
import Bitte14 from "../../assets/Bitte14.webp";
import Colina1 from "../../assets/Colina1.webp";
import Colina2 from "../../assets/Colina2.webp";
import Colina3 from "../../assets/Colina3.webp";
import Colina4 from "../../assets/Colina4.webp";
import Cardon1 from "../../assets/Cardon1.webp";
import Cardon2 from "../../assets/Cardon2.webp";
import Cardon3 from "../../assets/Cardon3.webp";
import Cardon4 from "../../assets/Cardon4.webp";
import Cardon5 from "../../assets/Cardon5.webp";
import Cardon6 from "../../assets/Cardon6.webp";
import Cardon7 from "../../assets/Cardon7.webp";
import Cardon8 from "../../assets/Cardon8.webp";
import CardonLiving from "../../assets/cardonLiving6.webp";
import Laredo2 from "../../assets/laredo2.webp";
import Laredo3 from "../../assets/laredo3.webp";
import Laredo4 from "../../assets/laredo4.webp";
import Laredo5 from "../../assets/laredo5.webp";
import Laredo6 from "../../assets/laredo6.webp";
import Laredo8 from "../../assets/laredo8.webp";
import Laredo9 from "../../assets/laredo9.webp";
import Laredo10 from "../../assets/laredo10.webp";
import Laredo11 from "../../assets/laredo11.webp";
import Laredo12 from "../../assets/laredo12.webp";

export default function proyectosPage() {
  ScrollTop();

  const arrayBitte = [
    Bitte,
    Bitte2,
    Bitte3,
    Bitte4,
    Bitte5,
    Bitte6,
    Bitte7,
    Bitte8,
    Bitte9,
    Bitte10,
    Bitte11,
    Bitte12,
    Bitte13,
    Bitte14,
  ];

  const arrayColina = [Colina1, Colina2, Colina3, Colina4];

  const arrayCardon = [
    Cardon1,
    Cardon2,
    Cardon3,
    Cardon4,
    Cardon5,
    Cardon6,
    Cardon7,
    Cardon8,
  ];

  const arrayLaredo = [
    Laredo2,
    Laredo3,
    Laredo4,
    Laredo5,
    Laredo6,
    Laredo8,
    Laredo9,
    Laredo10,
    Laredo11,
    Laredo12,
  ];

  return (
    <>
      <Mural Fondo={Colina3} title={"Conoce Todos Nuestros Proyectos"} />
      <CardProyect
        Fondo={Bitte5}
        text={
          "Impresionante y exclusivo desarrollo de 116 departamentos en el corazón  de Tijuana, que mezcla un estilo minimalista y espacios abiertos con vegetación. Distinguiéndose por ser piezas vanguardistas de diseño, funcionales e inteligentes. "
        }
        title={"Bitte"}
        imagenes={arrayBitte}
      />
      <CardProyect
        Fondo={Colina1}
        text={
          "Concepto residencial que busca conectarte con los tuyos y con la naturaleza, haciendo posible una comunidad de innovación y modernidad."
        }
        title={"Colina Park Tijuana"}
        imagenes={arrayColina}
      />
      <CardProyect
        Fondo={CardonLiving}
        text={
          "Es un proyecto habitacional de 16 casas y una casa club, es decir donde podrás habitar y vivir al máximo una hermosa experiencia ya que cuenta con un circuito vehicular, un área común al centro del predio y no podría faltar la alberca, el área de estar, un área de camastros y espejos de agua, además de un huerto destinado al cultivo de vegetales."
        }
        title={"Cardon Living"}
        imagenes={arrayCardon}
        reduceBrightness={true}
      />
      <CardProyect
        Fondo={Laredo3}
        text={
          "Nueva propuesta vertical en La Cacho (Laredo, Tijuana) para las personas que buscan un estilo de vida urbano, activo, conectado y funcional. 82 unidades en 9 niveles."
        }
        title={"Sideways Living"}
        imagenes={arrayLaredo}
        reduceBrightness={true}
      />
    </>
  );
}
