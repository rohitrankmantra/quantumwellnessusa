"use client";

import Image from "next/image";

export default function DevicesHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/devices/devices-1.jpg"
        alt="Explore Our Ample Wellness Services"
        fill
        priority
        sizes="100vw"
        fetchPriority="high"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
          Explore Our Ample Wellness Devices
        </h1>
      </div>
    </section>
  );
}
