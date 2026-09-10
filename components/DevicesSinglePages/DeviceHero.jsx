import Image from "next/image";

export default function DeviceHero({
  title,
  image,
}) {
  return (
    <section className="relative w-full h-[70vh] mb-12 flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        fetchPriority="high"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-serif tracking-wide">
          {title}
        </h1>
      </div>
    </section>
  );
}
