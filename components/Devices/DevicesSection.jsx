"use client";

export default function DevicesSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

        {/* LEFT BIG DIV */}
        <div className="flex-1 space-y-2">
          <p className="text-gray-600 text-lg">
            Our wellness services are designed to support your journey to optimal health through personalized wellness programs and expert wellness coaching. We take a holistic approach to well-being, offering holistic wellness services that address the mind, body and spirit. With a focus on preventative care and individual needs, we also provide brain health assessments to support mental function and mental clarity, entrusting you to achieve lasting wellness and balance in every aspect of your life.
          </p>
        </div>

        {/* RIGHT IMAGE (Square on mobile, Circle on desktop) */}
        <div className="w-80 h-60 md:w-72 md:h-64 rounded-none md:rounded-full overflow-hidden flex md:items-center md:justify-center shadow-lg border-4 border-[#70512E]">
          <img
            src="/devices/devices-detail.jpg"
            alt="Circle Image"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
