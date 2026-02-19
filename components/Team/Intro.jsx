"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="w-full  px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Our team at Quantum Wellness is a passionate group of health and 
            wellness professionals dedicated to helping you achieve your goals. 
            With expertise in advanced therapies, fitness, nutrition, and 
            biohacking, we combine knowledge, innovation, and a personalized 
            approach to support your journey to optimal health.
          </p>
        </motion.div>

        {/* RIGHT SIDE — Single Circular Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center h-[400px] md:h-[500px]"
        >
          <div
            className="relative     /* THIS FIXES THE IMAGE */
                       w-64 h-64 md:w-full md:h-80 
                        overflow-hidden 
                       shadow-2xl border-6 border-white"
          >
            <Image
              src="/story/philosopy1.jpg"
              alt="Wellness main visual"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
