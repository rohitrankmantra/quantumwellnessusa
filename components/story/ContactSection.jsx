"use client"

import Image from "next/image"

export default function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24  bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Left Div */}
        <div
          className="relative flex-1 min-h-[24rem] lg:min-h-0 rounded-lg overflow-hidden"
        >
          <Image
            src="/home/contact-img-1.webp"
            alt="Premier Wellness contact"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-start p-8 lg:p-16 text-white rounded-lg">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">WE’D LOVE TO HEAR FROM YOU</h2>
            <p className="text-lg lg:text-xl">Join our newsletter to never miss a beat! </p>
          </div>
        </div>

        {/* Right Div (Form) */}
        <div className="flex-1 bg-white p-8 lg:p-12 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
          <div>
            <wl-lead-capture-widget k_business="36603" k_schema="01a09276-d144-7038-9fae-86aedf7c741b"></wl-lead-capture-widget>
          </div>
        </div>
      </div>
    </section>
  )
}
