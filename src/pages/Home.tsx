import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { FEATURES, SUPPORT_LINK } from '../utils/constants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-blue-600 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-medium">Trusted by 400M+ users worldwide</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Advanced Protection for Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Digital Life
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100">
              Get comprehensive antivirus protection with real-time threat detection and advanced security features
            </p>
            
            {/* Buttons - Fixed according to your screenshot */}
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  {/* Contact Support Button - Orange color for attention */}
  <Link to="/support">
    <Button variant="primary" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all">
      Contact Support
    </Button>
  </Link>
  
  {/* Download Free Trial Button - Green color for action */}
  <Link to="/download">
    <Button variant="primary" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all">
      Download Free Trial
    </Button>
  </Link>
</div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <div className="text-sm font-semibold">30-Day Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💳</div>
                <div className="text-sm font-semibold">No Credit Card</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm font-semibold">Instant Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="text-sm font-semibold">Bank-Level Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Powerful Features for Complete Protection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading protection with features you can trust. Join millions of satisfied users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => (
              <div 
                key={feature.id} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <a 
                  href={SUPPORT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Learn more 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">400M+</div>
              <p className="text-green-100 text-lg">Active Users</p>
              <div className="w-16 h-1 bg-green-400 mx-auto mt-4"></div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <p className="text-green-100 text-lg">Threat Detection</p>
              <div className="w-16 h-1 bg-green-400 mx-auto mt-4"></div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-green-100 text-lg">Expert Support</p>
              <div className="w-16 h-1 bg-green-400 mx-auto mt-4"></div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">30+</div>
              <p className="text-green-100 text-lg">Years Experience</p>
              <div className="w-16 h-1 bg-green-400 mx-auto mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what real users have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {String.fromCharCode(64 + item)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">User Name</h4>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "AVG has been protecting my family for years. The real-time protection gives me peace of mind."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Help with Your Security?</h2>
              <p className="text-xl mb-10 text-green-100">
                Our support team is available 24/7 to assist you with any questions or concerns
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Contact Support Button */}
                <Link to="/support">
                  <Button variant="primary" className="bg-green text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
                    Contact Support
                  </Button>
                </Link>
                
                {/* Download Free Trial Button */}
                <Link to="/download">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-green hover:text-green-600 text-lg px-8 py-4">
                    Download Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;