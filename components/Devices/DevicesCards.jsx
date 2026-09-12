"use client";

import Link from "next/link";
import Image from "next/image";

export default function DevicesCards() {
  const cards = [
    { title: "ballancer-pro", img: "/devices/devices-img/device-img-1.jpeg", link: "/devices/ballancer-pro" },
    { title: "bio charger", img: "/devices/devices-img/device-img-3.jpeg", link: "/devices/bio-charger" },
    { title: "cryowave", img: "/devices/devices-img/device-img-4.jpeg", link: "/devices/cryowave" },
    { title: "flexforce", img: "/devices/devices-img/device-img-5.jpeg", link: "/devices/flexforce" },
    { title: "infrared sauna", img: "/devices/devices-img/device-img-6.jpeg", link: "/devices/infrared-sauna" },
    { title: "red light therapy", img: "/devices/devices-img/device-img-8.jpeg", link: "/devices/red-light-therapy" },
    { title: "PEMF", img: "/devices/devices-img/device-img-9.jpeg", link: "/devices/pemf" },
    { title: "PNOE", img: "/devices/devices-img/device-img-10.png", link: "/devices/pnoe" },
    { title: "salt booth", img: "/devices/devices-img/device-img-11.jpeg", link: "/devices/salt-booth" },
    { title: "shapescale", img: "/devices/devices-img/device-img-12.jpeg", link: "/devices/shapescale" },
    { title: "xtone", img: "/devices/devices-img/device-img-13.jpeg", link: "/devices/xtone" },
    { title: "Oxefit XP1", img: "/devices/devices-img/device-img-14.webp", link: "/devices/oxefit-xp1" },
    { title: "Oxefit XS1", img: "/devices/devices-img/device-img-15.jpg", link: "/devices/oxefit-xs1" },
    { title: "Neubie/Neuit", img: "/devices/devices-img/device-img-16.jpg", link: "/devices/neuit" },
  ];

  return (
    <section className="w-full bg-[#F1F1F1] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3">
        Our Devices
      </h2>
      <div className="w-20 h-1 bg-[#8B4513] mx-auto mb-8"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((item, index) => (
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
                loading={index < 4 ? "eager" : "lazy"}
                fetchPriority={index < 4 ? "high" : "auto"}
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
