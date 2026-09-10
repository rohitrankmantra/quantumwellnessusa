"use client";

import Image from "next/image";

export default function DevicesSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

        <div className="flex-1 space-y-2">
          <p className="text-gray-600 text-lg">
            Our wellness services are designed to support your journey to optimal health through personalized wellness programs and expert wellness coaching. We take a holistic approach to well-being, offering holistic wellness services that address the mind, body and spirit. With a focus on preventative care and individual needs, we also provide brain health assessments to support mental function and mental clarity, entrusting you to achieve lasting wellness and balance in every aspect of your life.
          </p>
        </div>

        <div className="relative w-80 h-60 md:w-72 md:h-64 rounded-none md:rounded-full overflow-hidden shadow-lg border-4 border-[#70512E]">
          <Image
            src="/devices/devices-detail.jpg"
            alt="Wellness detail"
            fill
            sizes="(max-width: 768px) 20rem, 18rem"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
