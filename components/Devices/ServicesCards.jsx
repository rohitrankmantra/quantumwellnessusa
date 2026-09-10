"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServicesCards() {
  const servicecards = [
    {
      title: "Biofeedback",
      img: "/devices/services-img/services-img-1.jpg",
      link: "/devices/biofeedback",
    },
    {
      title: "Neurofeedback",
      img: "/devices/services-img/services-img-2.jpg",
      link: "/devices/neurofeedback",
    },
    {
      title: "Neurostimulation",
      img: "/devices/services-img/services-img-3.jpg",
      link: "/devices/neurostimulation",
    },
    {
      title: "Brain Mapping",
      img: "/devices/services-img/services-img-4.jpg",
      link: "/devices/brain-mapping",
    },
  ];

  return (
    <section className="w-full bg-[#F1F1F1] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3">
        Our Services
      </h2>
      <div className="w-20 h-1 bg-[#8B4513] mx-auto mb-8"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {servicecards.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            style={{ willChange: "transform" }}
          >
            <div className="relative w-full h-[250px] overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ willChange: "transform" }}
                loading="lazy"
              />

              <div className="absolute w-full left-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="w-full bg-[#70512E] text-center py-3">
                  <h2 className="text-gray-100 font-semibold text-sm uppercase tracking-wide">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
