import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nutrition Coaching in Ocala, FL | Quantum Wellness & Training",
  description:
    "Get personalized nutrition coaching in Ocala, FL. Build a sustainable nutrition plan based on your goals, metabolism, training, lifestyle, and progress.",
  alternates: {
    canonical: "/personal-training/nutrition-coaching/",
  },
};

const coachingPoints = [
  "Your current goals and starting point",
  "Training schedule and activity level",
  "Food preferences and dietary restrictions",
  "Daily schedule and lifestyle demands",
  "Protein, carbohydrate, and fat requirements",
  "Meal timing and workout nutrition",
  "Hydration and electrolyte needs",
  "Hunger, energy, sleep, and recovery",
  "Progress measurements and metabolic data",
  "Previous dieting history and current challenges",
];

const idealFor = [
  "Feel confused by conflicting nutrition advice",
  "Are exercising but not seeing the results you expect",
  "Want to lose body fat without relying on a crash diet",
  "Want to gain lean muscle or improve body composition",
  "Need accountability and a clear plan",
  "Struggle with meal planning, portions, or consistency",
  "Want nutrition support for strength training or athletic performance",
  "Are preparing for a bodybuilding or physique competition",
  "Want to improve your relationship with food",
  "Need a strategy that fits your work, family, and travel schedule",
];

const coachingIncludes = [
  [
    "Comprehensive Nutrition Assessment",
    "We begin by reviewing your goals, health and dieting history, current eating habits, training, lifestyle, challenges, and preferences.",
  ],
  [
    "Personalized Nutrition Targets",
    "Receive clear calorie and macronutrient recommendations based on your needs. When appropriate, we may also provide meal structure, food options, portion guidance, and timing recommendations.",
  ],
  [
    "Meal Planning Support",
    "Learn how to organize meals that support your goals without making food preparation unnecessarily complicated. Your strategy can adapt to workdays, family meals, dining out, and travel.",
  ],
  [
    "Training and Recovery Nutrition",
    "Strategically place protein, carbohydrates, fats, fluids, and electrolytes around training to support performance, recovery, and body-composition goals.",
  ],
  [
    "Ongoing Accountability",
    "Regular check-ins help us evaluate your consistency, progress, energy, hunger, digestion, recovery, and performance.",
  ],
  [
    "Evidence-Informed Adjustments",
    "Your plan can be adjusted as your weight, measurements, metabolism, training demands, or goals change. Nutrition should evolve with you.",
  ],
];

const fatLossPoints = [
  "Individual calorie and macronutrient targets",
  "High-protein meal planning",
  "Hunger-management strategies",
  "Carb placement around training",
  "Progress tracking beyond scale weight",
  "Planned adjustments when progress slows",
  "Guidance for restaurants, travel, and social events",
];

const physiquePoints = [
  "Bikini, Figure, Wellness, and Physique athletes",
  "Improvement seasons and muscle-building phases",
  "Contest-preparation support",
  "Body-composition monitoring",
  "Training-day and rest-day nutrition",
  "Post-competition transitions",
  "Long-term physique development",
];

const skills = [
  "Understanding calories and macronutrients",
  "Building balanced meals",
  "Reading food labels",
  "Managing portions",
  "Planning ahead",
  "Making substitutions",
  "Navigating restaurants and travel",
  "Recognizing when your plan needs to be adjusted",
  "Separating temporary scale changes from meaningful progress",
];

const steps = [
  [
    "Step 1: Initial Consultation",
    "We discuss your goals, history, schedule, food preferences, training, current challenges, and the type of support you need.",
  ],
  [
    "Step 2: Personalized Strategy",
    "Your nutrition targets and coaching structure are developed around your needs and starting point.",
  ],
  [
    "Step 3: Implementation",
    "You begin following the plan with clear guidance for meals, portions, timing, preparation, and tracking.",
  ],
  [
    "Step 4: Progress Reviews",
    "We evaluate your results, consistency, energy, hunger, training performance, and recovery.",
  ],
  [
    "Step 5: Strategic Adjustments",
    "Your plan is updated when your progress, schedule, training, metabolism, or goals change.",
  ],
];

const faqs = [
  [
    "Do you provide personalized meal plans?",
    "Depending on your coaching program and needs, we may provide individualized nutrition targets, meal structure, food options, portion recommendations, and substitution guidance. The goal is enough structure for progress while teaching you how to make informed choices.",
  ],
  [
    "Do I have to track calories or macros?",
    "Not necessarily. Tracking can be useful, but it is not the only approach. We determine the appropriate level of structure based on your goals, experience, lifestyle, and preferences.",
  ],
  [
    "Can nutrition coaching help me lose weight?",
    "Nutrition coaching can help you create a structured calorie deficit, improve consistency, and make informed adjustments. Individual results depend on adherence, activity, metabolism, medical history, sleep, stress, and starting condition.",
  ],
  [
    "Can you help me build muscle?",
    "Yes. Nutrition coaching can support muscle development by helping you consume adequate calories, protein, carbohydrates, and nutrients while coordinating intake with your training and recovery needs.",
  ],
  [
    "Is nutrition coaching available online?",
    "Yes. Online nutrition coaching is available for clients who do not live near Ocala or prefer remote support.",
  ],
  [
    "Can I combine nutrition coaching with personal training?",
    "Yes. Nutrition coaching can be combined with in-person personal training or online programming for a more integrated approach.",
  ],
  [
    "Do you offer metabolic testing?",
    "Yes. Quantum Wellness & Training offers PNOE resting metabolic and VO2 max testing. Testing can provide additional information to help personalize nutrition, cardio, and training recommendations.",
  ],
  [
    "Where are you located?",
    "Quantum Wellness & Training is located at 1107 E Silver Springs BLVD Unit 5, Ocala, FL 34470. Services are available by appointment.",
  ],
];

function List({ items, dark = false }) {
  return (
    <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-3 border-t pt-4 leading-relaxed ${dark ? "border-white/20 text-white/85" : "border-stone-200 text-stone-700"}`}
        >
          <span
            className={`font-bold ${dark ? "text-[#e6c08a]" : "text-[#8b6f47]"}`}
          >
            +
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
  align = "center",
}) {
  return (
    <div
      className={`${align === "left" ? "mr-auto text-left" : "mx-auto text-center"} mb-12 max-w-3xl`}
    >
      <p
        className={`mb-4 text-sm font-semibold uppercase tracking-[0.22em] ${light ? "text-[#e6c08a]" : "text-[#8b6f47]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold leading-tight md:text-5xl ${light ? "text-white" : "text-stone-950"}`}
      >
        {title}
      </h2>
      {children && (
        <div
          className={`mt-6 text-lg leading-relaxed ${light ? "text-white/80" : "text-stone-600"}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function NutritionCoachingPage() {
  return (
    <>
      <section className="relative flex min-h-[84vh] items-center overflow-hidden bg-stone-950 md:min-h-[85vh]">
        <Image
          src="/training/nutrition.webp"
          alt="Personalized nutrition coaching at Quantum Wellness"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-32  text-center md:px-10">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            PERSONALIZED NUTRITION COACHING IN OCALA, FL
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[#E6C08A] font-semibold">
            Stop guessing. Start following a nutrition strategy designed around your body, your goals, and your real life.
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
            At Quantum Wellness & Training, nutrition coaching is not about handing you a generic meal plan or forcing you to follow an extreme diet. We help you understand what your body needs, create a realistic strategy, and make adjustments based on your progress.

Whether your goal is fat loss, muscle development, improved energy, athletic performance, competition preparation, or better long-term health, your nutrition plan should be built specifically for you.
                    </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center bg-[#e6c08a] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-stone-950 transition hover:bg-white"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <section
        id="approach"
        className="bg-[#faf8f6] px-6 py-20 md:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeading
            align="left"
            eyebrow="Built around you"
            title="A plan that fits the person, not the population."
          >
            The best nutrition plan is not simply the one that looks good on
            paper. It is the one you can follow, measure, and adjust as your
            body changes.
          </SectionHeading>
          <div>
            <List items={coachingPoints} />
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-stone-600">
              Instead of chasing quick fixes, we help you build a structured
              approach that supports sustainable progress.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#7a5c32] px-6 py-20 text-white md:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="A practical fit"
            title="Support for the life you actually live."
            light
          >
            You do not need to be an athlete to benefit from personalized
            nutrition coaching. We work with individuals at different experience
            levels and meet you where you are.
          </SectionHeading>
          <div className="grid gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
            {idealFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-t border-white/25 pt-4 text-white/90"
              >
                <span className="font-bold text-[#e6c08a]">+</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="includes"
        className="bg-[#faf8f6] px-6 py-20 md:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Your coaching experience"
            title="What Your Nutrition Coaching May Include"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coachingIncludes.map(([title, description]) => (
              <article
                key={title}
                className="border border-stone-200 border-t-4 border-t-[#8b6f47] bg-white p-7 shadow-[0_12px_35px_rgba(55,45,30,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(55,45,30,0.1)]"
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#8b6f47]">
                  0{coachingIncludes.findIndex((item) => item[0] === title) + 1}
                </p>
                <h3 className="mb-3 text-xl font-bold text-stone-950">
                  {title}
                </h3>
                <p className="leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a5c32] px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Data-informed strategy"
            title="Go Beyond Estimated Calorie Needs"
            light
          >
            Most online calorie calculators rely on population averages. They do
            not directly measure your individual metabolism.
          </SectionHeading>
          <div className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-white/85">
            <p>
              Quantum Wellness &amp; Training offers PNOE metabolic testing,
              which can provide valuable information about how your body uses
              energy. Resting metabolic testing can help estimate how many
              calories your body burns at rest, while active testing can provide
              additional insight into exercise intensity, cardiovascular
              performance, and fuel utilization.
            </p>
            <p className="mt-5">
              When appropriate, this information can be used to develop a more
              precise nutrition and training strategy.
            </p>
            <Link
              href="/devices/pnoe"
              className="mt-8 inline-flex border border-[#e6c08a] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#e6c08a] transition hover:bg-[#e6c08a] hover:text-stone-950"
            >
              Learn About PNOE Metabolic Testing
            </Link>
          </div>
        </div>
      </section>

      <section id="goals" className="bg-white px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Fat loss" title="Nutrition for Fat Loss" />
            <p className="mb-6 text-lg leading-relaxed text-stone-600">
              Successful fat loss requires more than simply eating as little as
              possible. We help you create an appropriate calorie deficit while
              maintaining adequate protein, supporting training performance, and
              monitoring recovery.
            </p>
            <p className="text-lg leading-relaxed text-stone-600">
              The goal is to reduce body fat while protecting lean tissue and
              building habits you can maintain.
            </p>
          </div>
          <div className="bg-[#faf8f6] p-8 md:p-10">
            <h3 className="mb-7 text-2xl font-bold text-stone-950">
              Your strategy may include
            </h3>
            <List items={fatLossPoints} />
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f6] px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Muscle and performance"
            title="Nutrition for Muscle Growth and Performance"
          >
            Building muscle requires adequate nutrition, progressive training,
            and recovery. We help determine how much food your body needs to
            support performance and development without turning a
            muscle-building phase into uncontrolled weight gain.
          </SectionHeading>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-stone-600">
            Your plan may address protein distribution, training-day nutrition,
            carbohydrate timing, recovery meals, hydration, and progress-based
            calorie adjustments.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Physique development"
              title="Bodybuilding and Physique Nutrition"
            />
            <p className="text-lg leading-relaxed text-stone-600">
              As an IFBB Pro Figure athlete, Master Trainer, and Board Certified
              Health Coach, Ryan Martin understands the precision, consistency,
              and mental demands involved in physique development.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Competition coaching is highly individualized. Recommendations are
              based on the athlete&apos;s division, experience, timeline,
              current condition, training, and response to the plan.
            </p>
          </div>
          <div className="bg-[#7a5c32] p-8 text-white md:p-10">
            <h3 className="mb-7 text-2xl font-bold">
              Nutrition coaching may be tailored for
            </h3>
            <List items={physiquePoints} dark />
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f6] px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <SectionHeading
            align="left"
            eyebrow="Long-term independence"
            title="More Than a Meal Plan"
          >
            <>
              A meal plan tells you what to eat. Coaching helps you understand
              how to make decisions. Our goal is to help you develop skills you
              can continue using outside of a single program.
            </>
          </SectionHeading>
          <List items={skills} />
        </div>
      </section>

      <section className="bg-[#7a5c32] px-6 py-24 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="A coordinated approach"
            title="Nutrition Coaching That Works With Your Training"
            light
          >
            <>
              For the most complete approach, nutrition coaching can be combined
              with one-on-one personal training, online training and
              programming, PNOE testing, ShapeScale body-composition tracking,
              recovery services, and strength, rehabilitation, and performance
              programs.
            </>
          </SectionHeading>
          <div className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/85">
            By looking at nutrition, training, metabolism, recovery, and
            progress together, we can develop a more coordinated strategy.
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading eyebrow="Your coach" title="Work With Ryan Martin">
            <>
              Ryan Martin is an IFBB Pro Figure athlete, ISSA Master Trainer,
              and Board Certified Health Coach through the AADP. Her approach
              combines practical coaching experience, physique-development
              knowledge, and individualized wellness strategies.
            </>
          </SectionHeading>
          <p className="text-lg leading-relaxed text-stone-600">
            Ryan works with clients who want more than another temporary diet.
            She helps each person understand what they are doing, why they are
            doing it, and how the plan should evolve as they progress.
          </p>
        </div>
      </section>

      <section
        id="process"
        className="bg-[#faf8f6] px-6 py-20 md:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="The process" title="What to Expect" />
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5">
            {steps.map(([title, description], index) => (
              <article
                key={title}
                className="relative border-t-2 border-[#8b6f47] pt-5"
              >
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#8b6f47]">
                  0{index + 1}
                </span>
                <h3 className="mb-3 text-xl font-bold text-stone-950">
                  {title.replace(/^Step \d+: /, "")}
                </h3>
                <p className="leading-relaxed text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Answers"
            title="Frequently Asked Questions"
          />
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group border-t border-stone-200 py-5"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-stone-950 marker:hidden">
                {question}
                <span className="float-right text-[#8b6f47] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl leading-relaxed text-stone-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#7a5c32] px-6 py-24 text-center text-white md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#e6c08a]">
            Start with a strategy
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Build a Nutrition Strategy You Can Actually Follow
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            You do not need another extreme diet, another generic meal plan, or
            more conflicting advice. You need a clear strategy, appropriate
            accountability, and adjustments based on how your body responds.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex bg-[#e6c08a] px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-stone-950 transition hover:bg-white"
          >
            Start Nutrition Coaching
          </Link>
          <p className="mt-10 text-sm leading-relaxed text-white/70">
            Quantum Wellness &amp; Training
            <br />
            1107 E Silver Springs BLVD Unit 5, Ocala, FL 34470
            <br />
            (352) 425-8431
          </p>
        </div>
      </section>

      <section
        aria-label="Disclaimer"
        className="bg-stone-950 px-6 py-10 text-center text-sm leading-relaxed text-white/60 md:px-10"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e6c08a]">
            Disclaimer
          </p>
          <p>
            Nutrition coaching is intended for general wellness, education,
            fitness, and performance support. It is not medical nutrition
            therapy and does not replace evaluation, diagnosis, or treatment by
            a physician or licensed healthcare professional. Clients with
            medical conditions, food allergies, eating disorders, or prescribed
            therapeutic diets should consult an appropriately licensed
            healthcare provider.
          </p>
        </div>
      </section>
    </>
  );
}
