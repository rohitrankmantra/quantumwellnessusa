"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaYoutube, FaArrowUp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTopButton, setShowTopButton] = useState(false);

  // Scroll listener to show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-[#e8e5e1] pt-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <motion.div
          variants={footerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* 1️⃣ LOGO + SOCIALS */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 flex flex-col md:items-center items-start"
          >
            <Link href="/">
              <Image
                src="/logo-dark.jpeg"
                alt="Quantum Wellness Logo"
                width={200}
                height={60}
                className="object-contain cursor-pointer"
              />
            </Link>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 pt-4 items-center md:justify-center justify-start">
              <a
                href="https://www.facebook.com/people/Quantum-Wellness/100069946674457/"
                className="hover:text-[#70512E] transition"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/quantum_wellness_usa/"
                className="hover:text-[#70512E] transition"
              >
                <AiFillInstagram size={22} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCn-GJSUTHzdSqg9K7oLWkDQ"
                className="hover:text-[#70512E] transition"
              >
                <FaYoutube size={22} />
              </a>
            </div>
          </motion.div>

          {/* 2️⃣ SERVICES */}
          {/* <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold">Service Booking</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/appointments" className="hover:text-[#70512E] transition">
                  Appointments
                </a>
              </li>
              <li>
                <a href="/classes" className="hover:text-[#70512E] transition">
                  Classes
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-[#70512E] transition">
                  Events
                </a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-[#70512E] transition">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/devices" className="hover:text-[#70512E] transition">
                  Devices/Services
                </a>
              </li>
            </ul>
          </motion.div> */}

          {/* 3️⃣ USEFUL LINKS */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold">Useful Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="/contact" className="hover:text-[#70512E] transition">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/store"
                  className="hover:text-[#70512E] transition"
                >
                  Store
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-[#70512E] transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-[#70512E] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="hover:text-[#70512E] transition">
                  Terms of Use
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 4️⃣ CONTACT + ADDRESS */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif font-bold">Contact</h4>

            <p className="text-gray-600 flex items-center gap-3">
              <MdEmail size={20} className="text-[#70512E]" />
              <a
                href="mailto:Ryan@quantumwellnessusa.com"
                className="hover:text-[#70512E] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ryan@quantumwellnessusa.com
              </a>
            </p>

            <p className="text-gray-600 flex hover:text-[#70512E] items-center gap-3">
              <FaPhoneAlt size={18} className="text-[#70512E] " />
              <a
                href="tel:+13524258431"
                className="hover:text-[#70512E] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                +13524258431
              </a>
            </p>

            <p className="text-gray-600 flex items-start gap-3">
              <FaMapMarkerAlt size={20} className="text-[#70512E]" />
              <a
                href="https://www.google.com/maps?q=Quantum+Wellness,1107+E+Silver+Springs+Blvd,+Unit+5+,+Ocala,+Florida+34470,+USA"
                className="hover:text-[#70512E] transition "
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span>
                  1107 E Silver Springs Blvd,
                  <br />
                  Unit 5 Ocala, FL, USA 34470
                </span>
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* APP DOWNLOAD SECTION */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 flex flex-col items-center space-y-4"
        >
          <h4 className="font-serif font-bold text-md">Download Our App</h4>

          <div className="flex items-center justify-center gap-4">
            {/* App Store */}
            <a
              href="https://apps.apple.com/us/app/quantum-wellness/id6504941348"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/AppStore-logo.svg"
                alt="Download on App Store"
                width={100}
                height={50}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.wellnessliving.achieve"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/GooglePlay-Logo.svg"
                alt="Get it on Google Play"
                width={100}
                height={50}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#70512E]">
        <motion.div
          variants={itemVariants}
          className="pt-5 pb-5 text-md border-t border-white/10 text-center text-gray-100"
        >
          <p>&copy; {currentYear} Quantum Wellness. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 hover:cursor-pointer rounded-full bg-white text-[#70512E] shadow-lg  transition-all active:scale-95"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
