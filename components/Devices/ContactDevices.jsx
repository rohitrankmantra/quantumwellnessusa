"use client"

import { useState } from "react"
import Image from "next/image"

export default function ContactDevices() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    captcha: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert("Form submitted!")
  }

  return (
    <section className="w-full py-20 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        <div className="relative flex-1 min-h-[24rem] lg:min-h-0 rounded-lg overflow-hidden">
          <Image
            src="/devices/devices-contact.webp"
            alt="Premier Wellness and Longevity Center"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-start p-8 lg:p-16 text-white rounded-lg">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">YOUR PREMIER WELLNESS AND LONGEVITY CENTER</h2>
            <p className="text-lg lg:text-xl">Get Started Today on your journey to holistic wellness and energy balancing for the mind body and spirit! </p>
          </div>
        </div>

        <div className="flex-1 bg-white p-8 lg:p-12 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#70512E]"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#70512E]"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#70512E]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#70512E]"
              required
            />
            <input
              type="text"
              name="captcha"
              placeholder="Enter CAPTCHA"
              value={formData.captcha}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#70512E]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#70512E] text-white hover:cursor-pointer font-semibold py-3 rounded hover:bg-black hover:text-white transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
