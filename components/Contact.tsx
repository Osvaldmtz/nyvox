"use client";

import { type FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      projectType: String(formData.get("projectType") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.projectType ||
      !payload.message
    ) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="border-b border-black/[0.06] bg-white py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:gap-24 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-32 lg:px-14">
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="grid gap-10 md:grid-cols-2">
            <label className="flex flex-col gap-3 text-[14px] font-medium tracking-tight">
              Nombre
              <input
                name="name"
                required
                autoComplete="name"
                className="border-b border-black/20 bg-transparent py-2 text-[17px] font-normal outline-none transition-colors duration-300 placeholder:text-black/30 focus:border-nyvox-blue"
                placeholder="Tu nombre"
              />
            </label>
            <label className="flex flex-col gap-3 text-[14px] font-medium tracking-tight">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="border-b border-black/20 bg-transparent py-2 text-[17px] font-normal outline-none transition-colors duration-300 placeholder:text-black/30 focus:border-nyvox-blue"
                placeholder="tu@empresa.com"
              />
            </label>
          </div>
          <label className="flex flex-col gap-3 text-[14px] font-medium tracking-tight">
            Tipo de proyecto
            <select
              name="projectType"
              required
              className="cursor-pointer border-b border-black/20 bg-transparent py-2 text-[17px] font-normal outline-none transition-colors duration-300 focus:border-nyvox-blue"
              defaultValue=""
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
              name="message"
              required
              rows={5}
              className="resize-none border-b border-black/20 bg-transparent py-2 text-[17px] font-normal outline-none transition-colors duration-300 placeholder:text-black/30 focus:border-nyvox-blue"
              placeholder="Contexto, plazos, objetivos."
            />
          </label>
          <div className="flex flex-wrap items-center gap-8">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full bg-nyvox-blue px-9 py-3.5 text-[15px] font-medium tracking-tight text-white transition-opacity duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
            </button>
            {status === "success" && (
              <p className="text-[15px] text-black/55">
                Recibimos tu mensaje. Te respondemos pronto.
              </p>
            )}
            {status === "error" && (
              <p className="text-[15px] text-red-600">
                Hubo un problema al enviar. Intenta de nuevo.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
