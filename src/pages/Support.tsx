import React from 'react';
import Button from '../components/Button';
import { SUPPORT_LINK } from '../utils/constants';

const Support: React.FC = () => {
  const supportTopics = [
    {
      icon: "💻",
      title: "Installation & Setup",
      description: "Get help installing and setting up AVG products"
    },
    {
      icon: "🔒",
      title: "Account & Billing",
      description: "Manage your subscription and payment methods"
    },
    {
      icon: "🛡️",
      title: "Security Issues",
      description: "Report threats and get security assistance"
    },
    {
      icon: "📱",
      title: "Mobile Protection",
      description: "Support for iOS and Android devices"
    },
    {
      icon: "🌐",
      title: "VPN & Privacy",
      description: "Help with VPN connection and privacy settings"
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Optimize AVG for better system performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help You?</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get instant support from our expert team
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="flex-1 px-6 py-4 rounded-l-lg text-gray-900 text-lg"
              />
              <button className="bg-green-500 px-8 py-4 rounded-r-lg hover:bg-green-600 transition-colors font-semibold">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Support Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportTopics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <a 
                  href={SUPPORT_LINK}
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Get Help →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Instant messaging with support agents</p>
              <Button variant="primary" className="w-full">
                Start Chat
              </Button>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Speak directly with an expert</p>
              <Button variant="primary" className="w-full">
                Call Now
              </Button>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Get help via email within 24 hours</p>
              <Button variant="primary" className="w-full">
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">
                  How do I install AVG Antivirus on my device?
                </h3>
                <p className="text-gray-600">
                  Download the installer from our website and run it. Follow the on-screen instructions...
                </p>
                <a href={SUPPORT_LINK} className="text-blue-600 font-semibold mt-2 inline-block">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;