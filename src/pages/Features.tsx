import React from 'react';
import { FEATURES, SUPPORT_LINK } from '../utils/constants';
import Button from '../components/Button';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Complete Protection</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover how AVG Antivirus keeps you safe with industry-leading security features
          </p>
          <Button variant="primary" className="bg-white text-green-700 hover:bg-gray-100">
            See All Features
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a 
                  href={SUPPORT_LINK}
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
                >
                  Learn more <span className="ml-2">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ransomware Protection</h3>
                <p className="text-gray-600">Advanced protection against ransomware attacks</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🔒</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure VPN</h3>
                <p className="text-gray-600">Browse anonymously with bank-grade encryption</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mobile Security</h3>
                <p className="text-gray-600">Protect your iOS and Android devices</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💳</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Identity Protection</h3>
                <p className="text-gray-600">Safeguard your personal and financial data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-xl mb-8">Start your free trial today</p>
          <Button variant="primary" className="bg-green text-green-600 hover:bg-gray-100">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;