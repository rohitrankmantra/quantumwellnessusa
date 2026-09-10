"use client";

import Image from "next/image";

export default function StoreSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

        <div className="flex-1 space-y-2">
          <p className="text-gray-600 text-lg">
            Our health and wellness solutions are crafted to inspire and guide individuals toward achieving their best well-being. Our engaging and interactive programs empower participants to adopt sustainable lifestyle changes. With a holistic approach, we offer customizable wellness programs tailored to both individual and group needs, seamlessly integrating our unique services. Elevate your wellness journey with our thoughtfully designed care and health packages, providing personalized support and resources to foster lasting health, balance and vitality.
          </p>
        </div>

        <div className="relative w-80 h-60 md:w-56 md:h-56 rounded-none md:rounded-full overflow-hidden flex md:items-center md:justify-center shadow-lg border-4 border-[#70512E]">
          <Image
            src="/devices/devices-2.jpg"
            alt="Wellness circle image"
            fill
            sizes="(max-width: 768px) 20rem, 14rem"
            className="object-cover"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
