"use client";

export default function AboutSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Achieve Your Goals at Our Personal Training and Wellness Center
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-[#8B4513] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Content Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text */}
        <div className="space-y-4 text-gray-700 order-2 md:order-1">
          <p>
            At our personal training and wellness center, we offer a wide range of services to help you achieve your health and fitness goals. Our approach focuses on holistic well-being, combining advanced therapies with personalized programs to enhance both mind and body.  
          </p>
          <p>
            Learn advanced treatments like neurofeedback and biofeedback, or rejuvenate at our quantum wellness spa. Boost recovery and vitality with red light therapy, PEMF therapy, or BallancerPro devices. Relax and detoxify with infrared sauna sessions or take advantage of our sports recovery treatments and VO2 max testing to optimize your athletic performance.
          </p>
          <p>
            Our personalized fitness plans, guided by expert trainers and metabolic testing, are made to your needs. We also offer innovative solutions like peptide consultations therapies and biohacking techniques to enhance energy and vitality. To support your overall wellness, we provide nutrition support, supplementation guidance and lymphatic massage. Transform your lifestyle with body contouring options and neuro-muscular reeducation programs, designed for sustainable, long-term health and fitness. 
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="/story/story1.jpg"
            alt="Wellness Image"
            className="rounded-xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
