export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="border-b border-black/[0.06] bg-white pt-16 pb-32 md:pt-24 md:pb-48"
    >
      <div className="mx-auto max-w-[900px] px-6 text-center md:px-10 lg:px-14">
        <p
          className="font-medium leading-[1.15] tracking-[-0.03em] text-nyvox-black md:leading-[1.12]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          Creemos que el software bien hecho se nota. Cada línea de código,
          cada pixel y cada decisión de producto debe servir a un solo
          propósito: hacer que tu negocio funcione mejor.
        </p>
      </div>
    </section>
  );
}
