import ScrollIcon from "../scrollIcon";

interface MuralProps {
  Fondo: string;
  title: string;
}

export default function Mural({ Fondo, title }: MuralProps) {
  return (
    <div
      className="min-h-svh flex items-center bg-cover bg-center px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div className="animate-fade-down">
        <h2 className="text-white py-2 text-xs md:text-lg">SM8 Desarrollos</h2>
        <h1 className="text-white text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
          {title}
        </h1>
        <h2 className="text-white py-2 text-xs md:text-lg">
          Con SM8 el diseño arquitectónico transforma sueños en estructuras,
          creando un mundo donde la imaginación cobra vida.
        </h2>
        <ScrollIcon />
      </div>
    </div>
  );
}
