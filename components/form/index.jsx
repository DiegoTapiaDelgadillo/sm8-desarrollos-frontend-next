import Input from "../input";
import { useState } from "react";
import CloseButton from "../closeButton";
import SvgLoanding from "../loading/svgLoanding";
import CheckSvg from "../checkSvg";
import useFormValidation from "../../hooks/useValidationForm";

export default function Form() {
  const { errors, validateForm } = useFormValidation();
  const [messageStatus, setMessageStatus] = useState("neutral");
  const [modalStatus, setModalStatus] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correoDestino: "",
    telefono: "",
    asunto: "",
    empresa: "",
    ciudad: "",
    mensaje: "",
    origen: "Desarrollos",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validateForm(formData);
      setMessageStatus("loading");
      setModalStatus(true);
      const response = await fetch(
        "https://api.sm8.com.mx:13003/api/enviar-correo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setMessageStatus("enviado");
      } else {
        setMessageStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
    }
  };

  const data = [
    {
      placeholder: "Nombre",
      type: "text",
      name: "nombre",
      id: "nombre",
      value: formData.nombre,
      error: errors.nombre,
    },
    {
      placeholder: "Correo electrónico",
      type: "text",
      name: "correoDestino",
      id: "correoDestino",
      value: formData.correoDestino,
      error: errors.correoDestino,
    },
    {
      placeholder: "Teléfono",
      type: "text",
      name: "telefono",
      id: "telefono",
      value: formData.telefono,
      error: errors.telefono,
    },
    {
      placeholder: "Asunto",
      type: "text",
      name: "asunto",
      id: "asunto",
      value: formData.asunto,
      error: errors.asunto,
    },
    {
      placeholder: "Empresa",
      type: "text",
      name: "empresa",
      id: "empresa",
      value: formData.empresa,
      error: errors.empresa,
    },
    {
      placeholder: "Ciudad",
      type: "text",
      name: "ciudad",
      id: "ciudad",
      value: formData.ciudad,
      error: errors.ciudad,
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        {data.map((item) => (
          <Input
            key={item.name}
            placeholder={item.placeholder}
            type={item.type}
            name={item.name}
            id={item.id}
            onChange={handleInputChange}
            value={item.value}
            error={item.error}
          />
        ))}
        <div className=" w-full py-2">
          <textarea
            className="w-full border border-neutral-500 rounded-xl p-2 shadow"
            placeholder="Cuentanos más sobre tu proyecto..."
            name="mensaje"
            id="mensaje"
            onChange={handleInputChange}
            value={formData.mensaje}
          />
        </div>
        <button
          type="submit"
          className=" w-full bg-black text-white p-4 rounded-xl shadow border border-black hover:bg-white hover:text-black ease-in-out duration-300"
        >
          Enviar
        </button>
      </form>
      {modalStatus ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none bg-my-blur animate-fade">
            <div className="relative w-full">
              <div className="w-auto p-2 sm:px-24 md:px-48 lg:px-56 xl:px-72 2xl:px-96">
                <div className="bg-black rounded-xl p-2">
                  <div className="flex items-start justify-end w-full ">
                    <CloseButton onClick={closeModal} />
                  </div>
                  <div className=" flex items-center justify-center py-24">
                    {messageStatus === "loading" && (
                      <>
                        <p className=" text-white pr-2">Enviando mensaje</p>
                        <SvgLoanding />
                      </>
                    )}
                    {messageStatus === "enviado" && (
                      <>
                        <p className=" text-white pr-2">
                          Mensaje enviado correctamente
                        </p>
                        <CheckSvg />
                      </>
                    )}
                    {messageStatus === "error" && (
                      <>
                        <p className=" text-white">
                          Error al enviar el mensaje
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
