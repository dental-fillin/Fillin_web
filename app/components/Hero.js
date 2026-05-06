import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-4 text-gray-100">
              Delivering Contamination Control, Compliance, and Confidence.
            </p>
            <p className="text-xl md:text-xl mb-8 text-gray-100">
              We help pharmaceutical and controlled-environment facilities maintain the highest standards of cleanroom performance — from supplies and garments to servicing, construction, and emergency decontamination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-white text-[#2C2E9F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Get a Consultation
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <div className="relative w-full" style={{ aspectRatio: "4/3", minHeight: "18rem" }}>
                <Image
                  src="/h2.jpg"
                  alt="Fillin Home"
                  fill
                  style={{ objectFit: "fill" }}
                  className="rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
