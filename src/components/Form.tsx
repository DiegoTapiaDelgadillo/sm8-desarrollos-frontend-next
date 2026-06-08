"use client";

import { useState } from "react";
import Image from "next/image";
import Input from "@/components/ui/Input";
import useValidationForm from "@/hooks/useValidationForm";
import { socialLinks } from "@/data/navigation";

interface FormState {
  nombre: string;
  correoDestino: string;
  telefono: string;
  asunto: string;
  empresa: string;
  ciudad: string;
  mensaje: string;
}

const emptyForm: FormState = {
  nombre: "",
  correoDestino: "",
  telefono: "",
  asunto: "",
  empresa: "",
  ciudad: "",
  mensaje: "",
};

export default function Form() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { errors, validateForm } = useValidationForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false);
    setIsError(false);

    try {
      await validateForm({
        nombre: form.nombre,
        correoDestino: form.correoDestino,
        telefono: form.telefono,
        asunto: form.asunto,
        mensaje: form.mensaje,
      });
    } catch {
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(
        "https://api.sm8.com.mx:13003/api/enviar-correo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, origen: "Desarrollos" }),
        },
      );
      if (!res.ok) throw new Error();
      setIsSuccess(true);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:divide-x lg:divide-[var(--color-rule)] gap-12 lg:gap-0">
          {/* Columna izquierda — info */}
          <div className="flex flex-col lg:w-2/5 lg:pr-16 lg:py-4">
            <h2
              className="
              text-[length:var(--text-section)]
              font-light tracking-normal leading-snug
              text-[var(--color-ink)]
              mb-4
            "
            >
              Hablemos
            </h2>

            <p
              className="
              text-[length:var(--text-body)]
              font-light tracking-normal leading-relaxed
              text-[var(--color-muted)]
              max-w-[40ch]
              mb-8
            "
            >
              Estamos listos para escuchar tu proyecto y construir juntos algo
              extraordinario.
            </p>

            <div className="border-t border-[var(--color-rule)] mb-6" />

            <div className="flex flex-col gap-2 mb-8">
              <p className="text-[length:var(--text-body)] font-light text-[var(--color-ink)]">
                +52 (55) 1423 1881
              </p>
              <p className="text-[length:var(--text-body)] font-light text-[var(--color-ink)]">
                contacto@sm8.com.mx
              </p>
            </div>

            <div className="border-t border-[var(--color-rule)] mb-6" />

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                >
                  <Image
                    src={social.iconPath}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-6 h-6 invert-[0.8] grayscale"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 lg:w-3/5 lg:pl-16"
          >
            <Input
              id="nombre"
              name="nombre"
              label="Nombre"
              value={form.nombre}
              onChange={handleChange}
              error={errors.nombre}
              required
            />
            <Input
              id="correoDestino"
              name="correoDestino"
              label="Correo electrónico"
              type="email"
              value={form.correoDestino}
              onChange={handleChange}
              error={errors.correoDestino}
              required
            />
            <Input
              id="telefono"
              name="telefono"
              label="Teléfono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              error={errors.telefono}
            />
            <Input
              id="asunto"
              name="asunto"
              label="Asunto"
              value={form.asunto}
              onChange={handleChange}
              error={errors.asunto}
              required
            />
            <Input
              id="empresa"
              name="empresa"
              label="Empresa"
              value={form.empresa}
              onChange={handleChange}
            />
            <Input
              id="ciudad"
              name="ciudad"
              label="Ciudad"
              value={form.ciudad}
              onChange={handleChange}
            />
            <Input
              id="mensaje"
              name="mensaje"
              label="Mensaje"
              type="textarea"
              value={form.mensaje}
              onChange={handleChange}
              error={errors.mensaje}
              required
              rows={4}
            />

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="
                  inline-flex items-center gap-2
                  text-[length:var(--text-label)]
                  font-normal tracking-widest uppercase
                  text-[var(--color-ink)]
                  transition-opacity duration-200 ease-in-out
                  hover:opacity-70
                  disabled:opacity-40 disabled:cursor-not-allowed
                  group
                "
              >
                <span>{isLoading ? "Enviando..." : "Enviar"}</span>
                <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-1">
                  →
                </span>
              </button>

              {isSuccess && (
                <p className="text-[length:var(--text-body)] font-light text-[var(--color-ink)]">
                  Tu mensaje fue enviado. Te contactaremos pronto.
                </p>
              )}

              {isError && (
                <p className="text-[length:var(--text-body)] font-light text-[var(--color-ink)]">
                  Hubo un problema al enviar. Intenta de nuevo o escríbenos
                  directo.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
