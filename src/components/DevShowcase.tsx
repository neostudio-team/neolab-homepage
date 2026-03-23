import Image from "next/image";

export default function DevShowcase() {
  return (
    <section className="relative bg-[#0d1117] overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/images/home/web-dev-13.png"
          alt="NeoLAB Development Showcase"
          width={1920}
          height={1021}
          className="w-full h-auto opacity-80"
        />
      </div>
    </section>
  );
}
