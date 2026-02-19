"use client";

import Image from "next/image";

export default function Health() {
  return (
    <section
      className="w-full relative bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/story/bg1.jpg')" }} 
    >
      <div className="w-full h-full">
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Div: Heading, Paragraph, Button */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl text-black font-semibold mb-6">
              Our Health Assessments
            </h1>
            <p className="mb-6 text-lg md:text-xl text-gray-600">
          Utilizing cutting-edge diagnostics, we evaluate your health to pinpoint areas for improvement and prevention.
            </p>
        
          </div>

          {/* Right Div: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full h-full max-w-md rounded-2xl overflow-hidden ">
              <Image
                src="/story/story2.jpg"
                alt="Illustration"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
