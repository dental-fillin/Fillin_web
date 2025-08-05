import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JobOpenings() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Job Openings
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Looking for work? Check out the available job openings below and find your next career opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sorry! No current jobs listed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              To advertise your job opening with us, kindly get in touch for more information on how to proceed.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact" 
                className="bg-[#2C2E9F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 