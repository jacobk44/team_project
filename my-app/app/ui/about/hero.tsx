"use client";

import Link from "next/link";
import Card from "@/app/ui/home/card";

type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
};

export default function Hero({ buttonText, image }: HeroProps) {
  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center px-4 md:px-0">
        {/* Background */}
        <div
          className="absolute inset-0 bg-center bg-cover brightness-75"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative bg-white/70 px-6 md:px-10 py-8 rounded-md text-center max-w-6xl w-full shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
            Why Choose KJB Elite Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Industry Specialization"
              description="We specialize in professional cleaning services for offices, medical facilities, and sports environments, ensuring expert-level results in every space."
              icon="🏢"
            />

            <Card
              title="Happy Cleaners"
              description="Our cleaners are trained, valued, and supported long-term, creating a motivated team that delivers consistent, high-quality cleaning results."
              icon="😊"
            />

            <Card
              title="Quality Assurance"
              description="We maintain strict quality control standards to ensure every cleaning service meets our promise of reliability, safety, and excellence."
              icon="✔️"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-4 md:px-0 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Our Expertise
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            At KJB Elite Service, excellence is built on consistency,
            professionalism, and attention to detail. We are committed to
            delivering high-quality cleaning services that meet the highest
            standards. We specialize in three key areas: Office, Medical, and
            Sports facilities. By focusing on these environments, we provide
            tailored cleaning solutions that meet their unique requirements. Our
            goal is simple — to deliver reliable, professional cleaning services
            that keep your spaces fresh, safe, and spotless.
          </p>
        </div>
      </section>

      {/* HAPPY CLEANERS SECTION */}
      <section className="px-4 md:px-20 py-12 md:py-16 bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
            Happy Cleaners, Better Results
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            At KJB Elite Service, our cleaning team is our greatest strength. We
            work with a dedicated team of long-term professionals who are
            committed to delivering consistent, high-quality service.
            <br />
            <br />
            We prioritize excellent working conditions, training, and support
            for our cleaners — because when our team is valued, our clients
            receive the best results.
            <br />
            <br />
            Every cleaner is carefully screened and professionally trained to
            ensure they meet our high standards. This allows us to guarantee
            reliable service and exceptional cleaning results every time.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-4 md:px-20 py-12 md:py-16 bg-gray-50">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
            Professional Cleaning Services
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            KJB Elite Service delivers premium, reliable cleaning solutions
            designed to keep your spaces fresh, healthy, and spotless at all
            times.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kitchen */}
          <div>
            <h3 className="font-semibold text-lg mb-3">KITCHEN SERVICES</h3>
            <p className="text-sm md:text-base text-gray-600">
              We provide deep kitchen cleaning services that ensure a hygienic,
              fresh, and safe cooking environment. Our team focuses on
              maintaining spotless surfaces and eliminating grease buildup for a
              healthier space.
            </p>
          </div>

          {/* Bathroom */}
          <div>
            <h3 className="font-semibold text-lg mb-3">BATHROOM SERVICES</h3>
            <p className="text-sm md:text-base text-gray-600">
              Our bathroom cleaning service ensures complete sanitation,
              freshness, and comfort. We help maintain a clean and germ-free
              environment that promotes hygiene and well-being.
            </p>
          </div>

          {/* Bedrooms */}
          <div>
            <h3 className="font-semibold text-lg mb-3">BEDROOM SERVICES</h3>
            <p className="text-sm md:text-base text-gray-600">
              We create clean, organized, and relaxing bedroom spaces that
              promote comfort and peace of mind. Our service ensures your
              personal space always feels fresh and welcoming.
            </p>
          </div>

          {/* Entire Home */}
          <div>
            <h3 className="font-semibold text-lg mb-3">FULL HOME CLEANING</h3>
            <p className="text-sm md:text-base text-gray-600">
              Our full-home cleaning service provides complete care for every
              area of your space. We ensure a consistently clean, healthy, and
              well-maintained environment throughout your home.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="font-semibold text-lg mb-3">
            Experience professional cleaning with KJB Elite Service — where
            quality and reliability come first.
          </h3>

          <Link
            href="/booking"
            className="inline-block mt-6 bg-gray-800 text-white px-6 py-3 text-sm md:text-base tracking-wide hover:bg-gray-700 transition rounded"
          >
            {buttonText}
          </Link>
        </div>
      </section>
    </>
  );
}
