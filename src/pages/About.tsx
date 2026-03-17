import React from 'react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AVG Antivirus</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Protecting millions of users worldwide for over 30 years
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              At AVG, we believe everyone has the right to feel safe online. Our mission is to provide 
              accessible, powerful security solutions that protect individuals and families from evolving 
              digital threats.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">400M+</div>
              <p className="text-gray-600">Users Protected</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <p className="text-gray-600">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">CEO</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;