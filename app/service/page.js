import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";

export const metadata = {
  title: 'Dental Equipment Servicing & Safety Testing | Fillin NSW',
  description: 'Electrical safety testing, preventive maintenance, repairs & installation for dental equipment across NSW. Reliable technical support & rapid response.',
  alternates: { canonical: 'https://fillin.au/equipment-servicing' },
  openGraph: {
    title: 'Dental Equipment Servicing & Repairs | Fillin',
    description: 'Preventive maintenance & certified safety testing for dental practices in NSW.',
    url: 'https://fillin.au/equipment-servicing'
  }
};

export default function EquipmentServicing() {

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Fillin Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-100 max-w-3xl mx-auto">
              We provide a range of services to support dental practices across NSW.
            </p>
          </div>
        </div>
      </section>
      
      {/* Recruitment Services Section */}
      <section className="py-2 bg-gradient-to-r from-[#2C2E9F] to-[#1a1c6b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-[#2C2E9F] mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Temping Services</h3>
              <h4 className="text-lg font-semibold text-[#2C2E9F] mb-2">On-Demand Dental Temps</h4>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                <li>Supplying temp dental assistants, hygienists, oral health therapists, and receptionists across NSW.</li>
                <li>Competitive hourly rates with pricing based on experience and skill.</li>
                <li>Fast, reliable placements to keep your clinic running smoothly.</li>
                <li>Flexible booking options—last-minute or planned in advance.</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-[#2C2E9F] mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recruitment Services</h3>
              <h4 className="text-lg font-semibold text-[#2C2E9F] mb-2">Permanent & Locum Recruitment Experts</h4>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                <li>Exclusive focus on dental industry recruitment.</li>
                <li>Placement of clinical (dentists, hygienists, assistants) and non-clinical staff.</li>
                <li>Tailored solutions for permanent and temporary positions.</li>
                <li>Thorough screening to ensure skill, experience, and cultural fit.</li>
                <li>Over 10 years' experience matching the right people to the right roles.</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-[#2C2E9F] mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Services</h3>
              <h4 className="text-lg font-semibold text-[#2C2E9F] mb-2">Complete Dental Equipment Care</h4>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                <li>Electrical safety testing for medical and dental equipment</li>
                <li>Scheduled maintenance to prevent downtime.</li>
                <li>Emergency repairs to keep your practice running.</li>
                <li>Installation of new equipment with staff training.</li>
                <li>Service plans tailored to your clinic's needs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
               <h2 className="text-4xl font-bold text-gray-900 mb-6">Temping Services</h2>
              <h3 className="text-2xl font-semibold text-[#2C2E9F] mb-6">Flexible Dental Staffing Solutions</h3>              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We provide dental clinics across NSW with highly skilled temporary staff, from dental assistants and hygienists to receptionists and dentists. Whether you need cover for sick leave, annual leave, or unexpected absences, our team can supply qualified, vetted professionals at competitive rates. With flexible booking options, we make sure your clinic continues to run efficiently, no matter the circumstances.
              </p>
             
            </div>
            <div className="relative">
              <div className="flex items-center justify-center">
                 <div className="w-full" style={{ height: "280px", minHeight: "20rem" }}>
                  <Image
                    src="/servicing_img.jpg"
                    alt="Equipment Servicing"
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-[#F5F5F5] rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Emergency support available around the clock to minimize downtime and keep your practice 
                    running smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div>
               <h2 className="text-4xl font-bold text-gray-900 mb-6">Recruitment Services</h2>
              <h3 className="text-2xl font-semibold text-[#2C2E9F] mb-6">Complete Dental Recruitment Support</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our recruitment service is designed to connect dental practices with the right people, every time. We specialise in sourcing both clinical and non-clinical staff, offering both permanent and temporary placement options. With deep industry knowledge and a fast, reliable process, we ensure every candidate is carefully screened for skills, experience, and cultural fit—helping your clinic hire with confidence and efficiency.
              </p>
 
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Servicing*/}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
             <h2 className="text-4xl font-bold text-gray-900 mb-6">Equipment Services</h2>
              <h3 className="text-2xl font-semibold text-[#2C2E9F] mb-6">Reliable Dental Equipment Support</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
               Our equipment services are designed to keep your dental practice operating smoothly. We provide routine servicing, safety checks, and compliance Test & Tag to meet industry standards. Whether it's preventative maintenance, emergency repairs, or the installation of new equipment, our experienced team ensures your tools are reliable, safe, and ready to use—minimising downtime and extending the life of your investment
              </p>
             
            </div>
            <div className="relative">
              <div className="flex items-center justify-center">
                <section className="py-20 bg-white">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#F5F5F5] rounded-xl shadow-lg p-12 text-center">
                      <div className="w-20 h-20 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Have an enquiry about the services?</h2>
                      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        We’d be happy to assist. Our team is here to ensure your dental practice operates smoothly.
                      </p>
                      <a
                        href="/contact"
                        className="inline-block bg-[#2C2E9F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors text-lg"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Training Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className=" bg-gray-100 rounded-xl shadow-lg p-8">
                <div className="w-20 h-20 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Upskilling Dental Professionals</h4>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                  <li>Practical, hands-on training for clinical and administrative staff.</li>
                  <li>Induction programs for new hires to get them job-ready.</li>
                  <li>Ongoing professional development workshops.</li>
                  <li>Training tailored to meet specific clinic needs.</li>
                  <li>Support with compliance and best-practice procedures.</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Staff Training</h2>
              <h3 className="text-2xl font-semibold text-[#2C2E9F] mb-6">Clinic-Ready Training Programs</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We offer customised training solutions to ensure your team performs at its best. From induction programs for new hires to refresher courses for experienced staff, our training is designed to boost efficiency, patient care, and compliance. Delivered in-clinic or online, our programs cover both clinical and administrative roles, helping your practice maintain high standards and a well-prepared workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
