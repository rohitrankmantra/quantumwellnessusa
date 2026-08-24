import React from 'react'
import ServiceHero from '../../../components/training/ServiceHero'
import ProblemSolutionSection from '../../../components/training/ProblemSolutionSection'
import IdealForSection from '../../../components/training/IdealForSection'
import WhyTrainWithRyanSection from '../../../components/training/WhyTrainWithRyanSection'

const page = () => {  
  return (
    <>
      <ServiceHero
        backgroundImage="/events/events.jpg"
        title="Equestrian Performance Training"
        subtitle="Build Strength. Improve Balance. Ride with Precision."
        description="Riding isn’t just about the horse—it’s about the rider’s ability to move, stabilize, and communicate with precision. At Quantum Wellness, our equestrian performance training is designed to help riders develop the strength, balance, and body awareness needed to perform at a higher level in the saddle."
      />

      <IdealForSection
        eyebrow="Who This Is For"
        headline="This Program Is Designed For You If…"
        items={[
          "Competitive riders (hunter, jumper, dressage, eventing)",
          "Recreational riders wanting better control and confidence",
          "Riders struggling with balance, asymmetry, or position",
          "Athletes returning from injury",
          "Riders wanting to improve connection with their horse"
        ]}
      />

      <ProblemSolutionSection
        eyebrow="Why Rider Fitness Matters"
        headline="Your horse can only perform as well as the signals you give."
        problems={[
          "Lack of core stability",
          "Poor hip mobility",
          "Lack of postural control",
          "Asymmetry and muscle imbalances"
        ]}
        solutionTitle="...it shows up as:"
        solutionText="Loss of balance in transitions, uneven pressure in the saddle, poor timing and communication, and increased injury risk (for you and your horse)."
      />

      <WhyTrainWithRyanSection
        eyebrow="Our Performance Approach"
        headline="Targeted, Data-Driven Rider Development"
        description="This isn’t generic training—we assess key areas to build a customized program designed specifically for your riding discipline and goals."
        points={[
          "Posture & alignment assessment",
          "Core stability & pelvic control",
          "Hip mobility & adductor strength",
          "Balance & proprioception",
          "Correcting muscle imbalances impacting your ride"
        ]}
      />
    </>
  )
}

export default page
