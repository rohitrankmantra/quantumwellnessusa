"use client";

import Link from "next/link";
import Image from "next/image";
import { goalsData } from "../data/goalsData";

export default function GoalsPage() {
  const shortenTitle = (text) => {
    const words = text.split(" ");
    return words.length > 4 ? words.slice(0, 4).join(" ") + "..." : text;
  };

  return (
    <section className="w-full">
      {/* TOP BANNER */}
      <div className="w-full md:h-[70vh] h-[60vh] relative flex items-center justify-center overflow-hidden">
        <Image
          src="/goals/fitness-goal.jpg"
          alt="Fitness goals banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-2xl md:text-4xl font-semibold text-center px-4">
          Top Goals Clients Aim to Achieve at Quantum Wellness
        </h1>
      </div>

      <div className="max-w-6xl text-center mx-auto px-4 py-8 text-gray-800 text-lg leading-relaxed">
        <p>
          At Quantum Wellness, clients seek cutting-edge wellness solutions to
          optimize their health, performance, and longevity. The most common
          goals include:
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
          GOALS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goalsData.map((item, index) => (
            <Link
              href={`/goals/${item.slug}`}
              key={index}
              className="group relative block overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-[250px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full bg-[#70512E] text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-md font-semibold line-clamp-1">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
