"use client";

import Image from "next/image";

export default function ReviewSection() {
  return (
    <section className="w-full bg-[#F7F7F7] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* RIGHT IMAGE — mobile me top me (order-1) */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-full md:w-full">
            <Image
              src="/testimonials/review.jpg"
              alt="Section Image"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>

        {/* LEFT TEXT — mobile me bottom (order-2) */}
        <div className="order-2 md:order-1">
          
          <p className="text-gray-600 leading-relaxed text-md md:text-lg mb-6">
            At Quantum Wellness, we pride ourselves on delivering exceptional service and transformative results, and our reviews reflect the positive impact we’ve had on our clients' lives. From improved energy and recovery to achieving long-term health and fitness goals, our clients consistently share their success stories and gratitude. Their feedback inspires us to continue providing cutting-edge wellness solutions and personalized care to help everyone reach their fullest potential. 
          </p>
        </div>

      </div>
    </section>
  );
}
