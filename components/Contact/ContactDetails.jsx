"use client";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { FaDirections } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <section className="w-full py-16 bg-[#fff8ef]" id="contactdetails">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* LEFT DIV */}
        <div className="space-y-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold">Contact Details</h2>

          {/* Address */}
          <div className="flex items-start gap-4">
            <MapPin className="text-[#70512E] h-5 w-5" />
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Quantum Wellness</span>
              <br />
              1107 E Silver Springs Blvd,
              <br />
              Unit 5 Ocala, FL, USA 34470
              <br />
              <a
                href="https://www.google.com/maps?q=Quantum+Wellness,1107+E+Silver+Springs+Blvd,+Unit+5+,+Ocala,+Florida+34470,+USA"
                className="font-semibold flex items-center text-[#70512E] gap-2"
              >
                Get directions <FaDirections className="text-[#70512E]" />
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 ">
            <Phone className="text-[#70512E] h-5 w-5" />
            <a href="tel:+13524258431">
              <p className="text-gray-700 hover:text-[#70512E] text-sm">
                +13524258431
              </p>
            </a>
          </div>

          {/* Opening Hours */}
          <div className="flex gap-4">
            <Clock className="text-[#70512E] mt-1 h-5 w-5" />
            <div>
              <h3 className="font-semibold text-sm mb-2">Opening Hours</h3>

              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                <span>Monday</span>
                <span>5:00 am - 7:00 pm</span>

                <span>Tuesday</span>
                <span>5:00 am - 7:00 pm</span>

                <span>Wednesday</span>
                <span>5:00 am - 7:00 pm</span>

                <span>Thursday</span>
                <span>5:00 am - 6:00 pm</span>

                <span>Friday</span>
                <span>5:00 am - 7:00 pm</span>

                <span>Saturday</span>
                <span>5:00 am - 12:00 pm</span>

                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-sm">
            <span className="text-gray-800  font-semibold">
              Better yet, see us in person!{" "}
            </span>
            <br />
            We love our customers, so feel free to visit during normal business
            hours.
          </p>
        </div>

        {/* RIGHT DIV (FORM) */}
        <div className="bg-white border border-[#d8c6ad] p-6 sm:p-8 rounded-2xl shadow-[0_12px_40px_rgba(112,81,46,0.12)]">
        

          <div>
            <wl-lead-capture-widget k_business="36603" k_schema="01a09276-d144-7038-9fae-86aedf7c741b"></wl-lead-capture-widget>
          </div>
        </div>
      </div>
      {/* New Buttons Section */}
      <div className="mt-8 flex justify-center gap-6">
        {/* Button 1 - CALL */}
        <a
          href="tel:+13524258431"
          className="flex items-center hover:cursor-pointer gap-2 bg-[#70512E] px-6 py-3 rounded-lg shadow-md border hover:scale-95 transition-all duration-200"
        >
          <Phone size={20} className="text-gray-100" />
          <span className="font-semibold text-gray-100">Call Us</span>
        </a>

        {/* Button 2 - EMAIL */}
        <a
          href="mailto:Ryan@quantumwellnessusa.com"
          className="flex items-center hover:cursor-pointer gap-2 bg-[#70512E] px-6 py-3 rounded-lg shadow-md border hover:scale-95 transition-all duration-200"
        >
          <Mail size={20} className="text-gray-100" />
          <span className="font-semibold text-gray-100">Email Us</span>
        </a>
      </div>
    </section>
  );
}
