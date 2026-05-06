export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Fillin</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cleanroom specialists dedicated to supporting pharmaceutical and controlled environments with practical, compliant, and efficient solutions.
            </p>
          
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/service" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/service#supplies" className="text-gray-300 hover:text-white transition-colors">
                  Cleanroom Supplies
                </a>
              </li>
              <li>
                <a href="/service#garments" className="text-gray-300 hover:text-white transition-colors">
                  Garments & PPE
                </a>
              </li>
              <li>
                <a href="/service#equipment" className="text-gray-300 hover:text-white transition-colors">
                  Equipment Servicing
                </a>
              </li>
              <li>
                <a href="/service#furniture" className="text-gray-300 hover:text-white transition-colors">
                  Cleanroom Furniture & Construction
                </a>
              </li>
              <li>
                <a href="/service#emergency" className="text-gray-300 hover:text-white transition-colors">
                  Emergency Decontamination
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Fillin. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 