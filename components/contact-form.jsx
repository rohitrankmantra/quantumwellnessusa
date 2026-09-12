"use client"

import { motion } from "framer-motion"

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-primary mb-4">
            Start Your Wellness Journey
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Schedule a consultation with our wellness experts today
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <wl-lead-capture-widget k_business="36603" k_schema="01a09276-d144-7038-9fae-86aedf7c741b"></wl-lead-capture-widget>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
