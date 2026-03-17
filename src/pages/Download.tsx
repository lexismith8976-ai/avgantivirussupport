import React from 'react';
import Button from '../components/Button';
import { SUPPORT_LINK } from '../utils/constants';

const Download: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Download AVG Antivirus</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get protected in minutes. Free download available.
          </p>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-2">Windows</h3>
              <p className="text-gray-600 mb-6">Windows 10, 11</p>
              <a href={SUPPORT_LINK}>
                <Button variant="primary" className="w-full">
                  Download for Windows
                </Button>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🍎</div>
              <h3 className="text-2xl font-bold mb-2">macOS</h3>
              <p className="text-gray-600 mb-6">macOS 11 and later</p>
              <a href={SUPPORT_LINK}>
                <Button variant="primary" className="w-full">
                  Download for Mac
                </Button>
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-2">Mobile</h3>
              <p className="text-gray-600 mb-6">iOS & Android</p>
              <a href={SUPPORT_LINK}>
                <Button variant="primary" className="w-full">
                  Get Mobile App
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">System Requirements</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Windows</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Windows 10/11 (32/64 bit)</li>
                  <li>• 2 GB RAM minimum</li>
                  <li>• 2 GB free hard disk space</li>
                  <li>• Internet connection required</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">macOS</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• macOS 11 or later</li>
                  <li>• 2 GB RAM minimum</li>
                  <li>• 2 GB free hard disk space</li>
                  <li>• Internet connection required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;