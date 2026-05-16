"use client";

import { motion } from "framer-motion";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useState,
} from "react";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function MagneticSubmitButton({
  disabled,
  children,
}: {
  disabled: boolean;
  children: ReactNode;
}) {
  const ref = useMagneticEffect(0.2);
  return (
    <button
      type="submit"
      disabled={disabled}
      ref={ref as React.RefObject<HTMLButtonElement>}
      className="rounded-full bg-nyvox-blue px-9 py-3.5 text-[15px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipo: "",
    mensaje: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    if (
      name === "nombre" ||
      name === "email" ||
      name === "tipo" ||
      name === "mensaje"
    ) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nombre = formData.nombre.trim();
    const email = formData.email.trim();
    const tipo = formData.tipo.trim();
    const mensaje = formData.mensaje.trim();

    if (nombre.length < 2) {
      setStatus("error");
      setErrorMessage("El nombre debe tener al menos 2 caracteres.");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setErrorMessage("Introduce un correo electrónico válido.");
      return;
    }
    if (!tipo) {
      setStatus("error");
      setErrorMessage("Selecciona un tipo de proyecto.");
      return;
    }
    if (mensaje.length < 10) {
      setStatus("error");
      setErrorMessage("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Nyvox - Nuevo contacto: ${nombre}`,
          from_name: "Formulario web Nyvox",
          botcheck: "",
          nombre,
          email,
          tipo_proyecto: tipo,
          mensaje,
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Error al enviar");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Error de conexión. Intenta de nuevo.");
    }
  }

  let submitLabel = "Enviar mensaje";
  if (status === "submitting") submitLabel = "Enviando...";
  else if (status === "success") submitLabel = "Enviado ✓";
  else if (status === "error") submitLabel = "Reintentar";

  const submitDisabled = status === "submitting" || status === "success";

  return (
    <section
      id="contacto"
      className="border-b border-black/[0.06] bg-white py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:gap-12 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-14">
        <div>
          <h2
            className="font-medium tracking-[-0.035em] text-nyvox-black"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            ¿Listos para construir?
          </h2>
          <p className="mt-8 max-w-md text-black/65">
            Cuéntanos qué tienes en mente. Respondemos en 24 horas.
          </p>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-32 text-center"
          >
            <h3 className="text-4xl font-bold tracking-tight text-nyvox-black md:text-5xl">
              Mensaje recibido.
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Te responderemos en menos de 24 horas.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="grid gap-10 md:grid-cols-2">
              <label className="flex flex-col gap-3 text-[14px] font-medium tracking-tight">
                Nombre
                <input
                  name="nombre"
                  autoComplete="name"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="border-b border-black/20 bg-transparent py-2 text-[17px] font-normal outline-none transition-colors duration-300 placeholder:text-black/30 focus:border-nyvox-blue"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="flex flex-col gap-3 text-[14px] font-medium tracking-tight">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-b border-black/20 bg-transparent py-2 text-[17px] font-normal outline-none transition-colors duration-300 placeholder:text-black/30 focus:border-nyvox-blue"
                  placeholder="tu@empresa.com"
                />
              </label>
            </div>
            <label className="flex flex-col gap-3 text-[14px] font-medium tracking-tight">
              Tipo de proyecto
              <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="cursor-pointer border-b border-black/20 bg-transparent py-2 text-[17px] font-normal outline-none transition-colors duration-300 focus:border-nyvox-blue"
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="App">App</option>
                <option value="SaaS">SaaS</option>
                <option value="Web">Web</option>
                <option value="Ecommerce">Ecommerce</option>
                <option value="Otro">Otro</option>
              </select>
            </label>
            <label className="flex flex-col gap-3 text-[14px] font-medium tracking-tight">
              Mensaje
              <textarea
                name="mensaje"
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                className="resize-none border-b border-black/20 bg-transparent py-2 text-[17px] font-normal outline-none transition-colors duration-300 placeholder:text-black/30 focus:border-nyvox-blue"
                placeholder="Contexto, plazos, objetivos."
              />
            </label>

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              defaultChecked={false}
              aria-hidden="true"
            />

            <div>
              <MagneticSubmitButton disabled={submitDisabled}>
                {submitLabel}
              </MagneticSubmitButton>
              {status === "error" && (
                <p className="mt-3 text-sm text-red-600">{errorMessage}</p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
