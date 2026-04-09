import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Fillin – Cleanroom Specialists',
  description: 'Learn about Fillin, cleanroom specialists dedicated to supporting pharmaceutical and controlled environments with practical, compliant, and efficient solutions.',
  alternates: { canonical: 'https://fillin.au/about' },
  openGraph: {
    title: 'About Fillin – Cleanroom Specialists',
    description: 'Cleanroom specialists serving pharmaceutical and controlled environment facilities.',
    url: 'https://fillin.au/about'
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Cleanroom specialists dedicated to supporting pharmaceutical and controlled environments with practical, compliant, and efficient solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Mission */}
          <div className="mb-16 mt-12 border-2 border-[#2C2E9F] rounded-xl p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Our focus is simple: reduce contamination risk while improving operational reliability.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                With experience across cleanroom supply management, servicing, and emergency response, we partner with your team to ensure your facility runs at peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Full Width Grey Background */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              'Pharmaceutical manufacturing',
              'Biotechnology',
              'Medical device production',
              'Laboratories and research facilities',
              'Hospitals and pharmacies',
            ].map((industry, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#2C2E9F]">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
