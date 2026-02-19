"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StoryAbout() {
  return (
    <section className="w-full mt-20 px-4 max-w-7xl mx-auto">
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
            Quantum Wellness was founded with a deep passion for healing,
            transformation, and empowering individuals to live fuller,
            healthier lives. What began as a personal journey soon turned
            into a mission to bring holistic wellness solutions to the world.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Through science-backed therapies, mindful practices, and modern
            wellness innovation, we aim to create a world where emotional,
            mental, and physical well-being align in harmony.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every step of our journey is guided by integrity, compassion,
            and a commitment to deliver real transformation.
          </p>
        </motion.div>

        {/* RIGHT SIDE - Stylish Overlapping Images */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] md:h-[560px] lg:h-[600px]"
        >
          {/* Back Image - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-30 left-0 w-full h-80 md:w-84 md:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10 "
          >
            <Image
              src="/story/story3.jpg"
              alt="Silhouette yoga at sunrise"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Front Image - Top Right (overlapping with style) */}
          <motion.div
            initial={{ opacity: 0, y: -30, rotate: 12 }}
            whileInView={{ opacity: 1, y: 0, rotate: 8 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="absolute top-14 right-0 w-80 h-96 md:w-96 md:h-[300px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-5 -rotate-3 hover:rotate-0 transition-transform duration-500 hidden md:block"
          >
            <Image
              src="/story/story1.jpg"
              alt="Woman in serene meditation pose in nature"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}