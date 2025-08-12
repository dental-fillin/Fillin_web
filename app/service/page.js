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

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      practice: 'Auckland Dental Care',
      text: 'The equipment servicing team at Fillin is exceptional. They keep our practice running smoothly with their reliable maintenance and quick response times.',
      rating: 5
    },
    {
      name: 'Dr. James Chen',
      practice: 'North Shore Dental',
      text: 'Professional service and excellent technical knowledge. They\'ve saved us from costly equipment failures with their preventive maintenance.',
      rating: 5
    },
    {
      name: 'Dr. Emma Wilson',
      practice: 'Central Auckland Dental',
      text: 'Outstanding customer service and technical expertise. They installed our new equipment perfectly and trained our staff thoroughly.',
      rating: 5
    }
  ];


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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Recruitment Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-[#2C2E9F] mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Temping Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Fillin employs and provides temporary hygienists, oral health therapists, dental assistants, receptionists, 
                and dentists. We currently service the NSW region.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-[#2C2E9F] mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recruitment Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Need help finding and employing the right dental staff for your clinic? We can help you in hiring the right 
                candidate, while you can continue to focus on running your clinic with as little disruption as possible.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-[#2C2E9F] mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff Training</h3>
              <p className="text-gray-600 leading-relaxed">
                Should you decide to hire dental support staff such as assistants, receptionists, or practice managers 
                with little or no experience in the field, and would like them trained or upskilled, we can help you. Our 
                training programs will help make the transition of unexperienced new staff into their new roles at your 
                clinic much smoother and will ensure there is little to no disruption of your current workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Equipment Servicing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 border-2 border-[#2C2E9F] rounded-lg p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Equipment Servicing</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We currently provide electrical safety testing for dental and medical equipment, along with 
              some minor repairs and maintenance work. We will also be expanding soon to include all repairs 
              and service work for dental equipment.
            </p>
            <div className="flex justify-center">
              <a
                href="#our-services"
                className="bg-[#2C2E9F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a1c6b] transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Equipment Servicing</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We currently provide electrical safety testing for dental and medical equipment, along with 
                some minor repairs and maintenance work. We will also be expanding soon to include all repairs 
                and service work for dental equipment. Keep an eye out for more updates soon on our website.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Certified electrical safety testing</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Preventive maintenance programs</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Emergency repair services</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Equipment installation and training</span>
                </div>
              </div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Service Coverage</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From routine maintenance to emergency repairs, we provide comprehensive equipment servicing 
                to ensure your dental practice operates at peak efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">All major dental equipment brands</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Compliance with safety standards</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Warranty on all repairs</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2C2E9F] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Competitive pricing and transparent quotes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="our-services" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional equipment servicing solutions for your dental practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-[#2C2E9F] mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Electrical Safety Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Our service department provides electrical safety testing for medical and dental equipment, 
                in accordance with the Australia and New Zealand standard AU/NZS 3551:2012.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-[#2C2E9F] mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dental Equipment Servicing and Repairs</h3>
              <p className="text-gray-600 leading-relaxed">
                Our technicians can help service and repair most dental equipment and x-ray devices. 
                Contact us for more information on our equipment services.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-[#2C2E9F] mb-6">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Technical and Electrical Services</h3>
              <p className="text-gray-600 leading-relaxed">
                We are available on-call from 6am to 9pm for technical and electrical work. 
                Feel free to contact us during those hours for help with your dental equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Testimonials */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from dental practices across Auckland about their experience with our equipment servicing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-[#2C2E9F]">{testimonial.practice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F5F5] rounded-xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-[#2C2E9F] rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Equipment Service?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to schedule equipment maintenance, repairs, or to discuss your servicing needs. 
              Our team is ready to help keep your dental practice running smoothly.
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

      <Footer />
    </main>
  );
}