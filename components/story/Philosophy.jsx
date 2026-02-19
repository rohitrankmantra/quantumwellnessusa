"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="relative w-full py-20 md:py-24  bg-white overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2d2d2d]">
            Our Philosophy
          </h2>

          <p className="mt-6 text-lg md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our wellness philosophy blends science-backed assessments, 
            individualized care, and sustainable lifestyle improvements 
            designed to elevate long-term health and wellbeing.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1 rounded-full bg-[#6B4F2B]" />
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg max-w-md   relative">
              <Image
                src="/story/philosopy.jpg"
                alt="Wellness practice"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>

            {/* NEW — Bottom-Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-16 md:-bottom-20 -right-3 md:-right-6 w-40 h-36 md:w-56 md:h-72 rounded-2xl overflow-hidden shadow-xl border-[6px] border-white bg-white "
            >
              <Image
                src="/story/philosopy2.jpg"
                alt="Additional wellness visual"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-xl md:text-3xl font-semibold text-[#2d2d2d]">
              A Science-Driven Approach to Better Living
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              We combine medical-grade assessments, personalized wellness plans, 
              and evidence-based therapies to support your physical, mental, 
              and emotional wellbeing. 
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our goal is to create an environment where healthier choices feel 
              natural — and lasting transformation feels achievable.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-1 bg-[#6B4F2B] rounded-full" />
              <p className="text-[#6B4F2B] font-medium text-lg">
                Wellness begins with understanding.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
