"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section
      className="w-full relative bg-contain bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url('/home/bg-img.jpg')" }} 
    >
      <div className="w-full h-full">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Div: Heading, Paragraph, Button */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl text-black font-semibold mb-6">
              Our Story
            </h1>
            <p className="mb-6 text-lg md:text-xl text-gray-600">
              Welcome to Quantum Wellness, where science meets serenity to transform your health and extend your life. At Quantum Wellness, we offer a holistic approach to wellness, combining cutting-edge technology with personalized care to help you achieve optimal health and longevity.
            </p>
            <button className="bg-[#8B4513] hover:bg-[#5c2d0f] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Right Div: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full  max-w-md rounded-2xl overflow-hidden ">
              <Image
                src="/home/our-story.jpg" 
                alt="Illustration"
                width={400}
                height={400}
                className="object-cover object-top  h-80 rounded-3xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
