"use client";

export default function HeroSection() {
  
  return (
    <section className="relative w-full h-screen overflow-hidden">

      <div className="absolute inset-0 overflow-hidden" data-lenis-prevent>
        <iframe
          src="https://www.youtube.com/embed/49-AqyLvdhk?autoplay=1&mute=1&controls=0&loop=1&playlist=49-AqyLvdhk&modestbranding=1&showinfo=0&rel=0"
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-[500vw] h-[500vh]
            sm:w-[400vw] sm:h-[400vh]
            md:w-[250vw] md:h-[250vh]
            lg:w-[120vw] lg:h-[200vh]
            pointer-events-none
          "
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>

      <div className="absolute inset-0 bg-black/40"></div>

    </section>
  );
}
