"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown1, setDropdown1] = useState(false); // ABOUT
  const [dropdown2, setDropdown2] = useState(false); // GOALS
  const [dropdown3, setDropdown3] = useState(false); // PERSONAL TRAINING

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 md:px-16 pt-[env(safe-area-inset-top)] ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center py-8 px-4 md:py-3 md:px-20 relative">
        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white z-20"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LEFT MENU (DESKTOP) */}
        <div className="hidden md:flex gap-6 text-sm text-white">
          {/* ABOUT */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              ABOUT US <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-black p-3 rounded-md w-60">
              <Link href="/our-story" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">Our Story</Link>
              <Link href="/our-team" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">Our Team</Link>
              <Link href="/blog" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">Quantum Wellness Blog</Link>
            </div>
          </div>

          {/* GOALS */}
          <div className="relative group">
            <button className="flex items-center gap-1 ">
              GOALS <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-black p-3 rounded-md w-96">
              <Link href="/goals/body-composition-aesthetic-enhancement" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">Body Composition & Aesthetic Enhancement</Link>
              <Link href="/goals/performance-strength-optimization" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">Performance & Strength Optimization</Link>
              <Link href="/goals/pain-management-recovery" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">Pain Management & Recovery</Link>
              <Link href="/goals/holistic-wellness-stress-reduction" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">Holistic Wellness & Stress Reduction</Link>
              <Link href="/goals/longevity-biohacking-for-anti-aging" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">Longevity & Biohacking</Link>
              <Link href="/goals/sexual-health-hormonal-balance-personalized-optimization" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">Sexual Health & Hormonal Balance</Link>
            </div>
          </div>

          {/* PERSONAL TRAINING */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              PERSONAL TRAINING <ChevronDown size={16} />
            </button>
            <div className="absolute hidden group-hover:block bg-black p-3 rounded-md w-64">
              <Link href="/personal-training/online" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">
                Online Personal Training
              </Link>
              <Link href="/personal-training/one-on-one" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">
                One-on-One Personal Training
              </Link>
              <Link href="/personal-training/nutrition-coaching" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">
                Nutrition Coaching
              </Link>
              <Link href="/personal-training/equestrian-performance" className="block px-2 py-1 font-semibold hover:bg-gray-300 hover:text-[#6F512D]">
                Equestrian Performance Training
              </Link>
            </div>
          </div>

        </div>

        {/* LOGO */}
        <div className="absolute md:static left-0 right-0 mx-auto flex justify-center pointer-events-none md:pointer-events-auto">
          <Link href="/">
            <Image src="/logo.png" width={120} height={80} alt="Logo" />
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="flex items-center gap-5 text-white z-20">
          <Link href="/reviews" className="hidden sm:block text-sm">REVIEWS</Link>
          <Link href="/devices" className="hidden sm:block text-sm">DEVICES</Link>
          <Link href="/cart"><ShoppingCart size={22} /></Link>
          <Link href="/sign-in" className="border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition">
            Login
          </Link>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`${mobileOpen ? "block" : "hidden"} md:hidden bg-black text-white px-6 py-4 space-y-3`}>
        <Link href="/faq" className="block text-lg">FAQ</Link>
        <Link href="/contact" className="block text-lg">Contact</Link>

        {/* ABOUT */}
        <div>
          <button onClick={() => setDropdown1(!dropdown1)} className="flex justify-between w-full text-lg">
            ABOUT US <ChevronDown />
          </button>
          {dropdown1 && (
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/our-story" className="block">Our Story</Link>
              <Link href="/our-team" className="block">Our Team</Link>
              <Link href="/blog" className="block">Blog</Link>
            </div>
          )}
        </div>

        {/* GOALS */}
        <div>
          <button onClick={() => setDropdown2(!dropdown2)} className="flex justify-between w-full text-lg">
            GOALS <ChevronDown />
          </button>
          {dropdown2 && (
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/goals/body-composition-aesthetic-enhancement" className="block">Body Composition</Link>
              <Link href="/goals/performance-strength-optimization" className="block">Performance</Link>
              <Link href="/goals/pain-management-recovery" className="block">Pain Management</Link>
              <Link href="/goals/holistic-wellness-stress-reduction" className="block">Holistic Wellness</Link>
              <Link href="/goals/longevity-biohacking-for-anti-aging" className="block">Longevity</Link>
              <Link href="/goals/sexual-health-hormonal-balance-personalized-optimization" className="block">Sexual Health</Link>
            </div>
          )}
        </div>

        {/* PERSONAL TRAINING */}
        <div>
          <button onClick={() => setDropdown3(!dropdown3)} className="flex justify-between w-full text-lg">
            PERSONAL TRAINING <ChevronDown />
          </button>
          {dropdown3 && (
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/personal-training/online" className="block">Online Personal Training</Link>
              <Link href="/personal-training/one-on-one" className="block">One-on-One Personal Training</Link>
              <Link href="/personal-training/nutrition-coaching" className="block">Nutrition Coaching</Link>
              <Link href="/personal-training/equestrian-performance" className="block">Equestrian Performance Training</Link>
            </div>
          )}
        </div>

        <Link href="/reviews" className="block text-lg">REVIEWS</Link>
        <Link href="/devices" className="block text-lg">DEVICES/SERVICES</Link>
      </div>
    </header>
  );
}
