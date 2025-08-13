import Image from "next/image";

export default function Hero() {
  return (
    <meta name="google-site-verification" content="l3vBSSDIr4zu6-XquqUYKjRw9vuDhaCSfO9wgcw4gtw" />
    <section id="home" className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6">
              Fillin - When you're short on staff, we're here to fill in
            </h1>
            <p className="text-xl md:text-xl mb-8 text-gray-100">
              Providing reliable dental staffing solutions across New South Wales. Fillin connects clinics with qualified professionals for both temporary and permanent roles. Trust us to keep your practice running smoothly, even when you’re short on staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/careers"
                className="bg-white text-[#2C2E9F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Get Started
              </a>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2C2E9F] transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <div className="relative w-full" style={{ aspectRatio: "4/3", minHeight: "18rem" }}>
                <Image
                  src="/h2.jpeg"
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
