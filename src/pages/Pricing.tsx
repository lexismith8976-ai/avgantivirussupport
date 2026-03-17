import React from 'react';
import { PRICING_PLANS, SUPPORT_LINK } from '../utils/constants';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Choose the plan that's right for you. All plans include a 30-day money-back guarantee.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform ${
                  plan.isPopular ? 'ring-2 ring-green-500 shadow-xl' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-green-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/year</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={SUPPORT_LINK}>
                    <Button 
                      variant={plan.isPopular ? 'primary' : 'outline'} 
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">Can I switch plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes, all plans come with a 30-day free trial.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;