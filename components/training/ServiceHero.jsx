"use client";

import Image from "next/image";

export default function ServiceHero({
  backgroundImage,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden"
    >
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-xl md:text-2xl text-[#E6C08A] font-semibold">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
            {description}
          </p>
        )}

       
      </div>
    </section>
  );
}
