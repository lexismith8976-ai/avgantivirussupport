import React from 'react';
import { SUPPORT_LINK } from '../utils/constants';
import Button from '../components/Button';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Cybersecurity Threats in 2024",
      excerpt: "Stay ahead of cybercriminals with our comprehensive guide to the latest threats...",
      date: "March 15, 2024",
      author: "Security Team",
      category: "Security"
    },
    {
      id: 2,
      title: "How to Protect Your Family Online",
      excerpt: "Essential tips and tools for keeping your loved ones safe in the digital world...",
      date: "March 10, 2024",
      author: "Family Safety Team",
      category: "Family Safety"
    },
    {
      id: 3,
      title: "Understanding Ransomware Attacks",
      excerpt: "Learn how ransomware works and the best ways to protect your data...",
      date: "March 5, 2024",
      author: "Threat Research Team",
      category: "Threat Analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Blog</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Latest insights, tips, and news from our security experts
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="text-sm text-green-600 mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                  <a 
                    href={SUPPORT_LINK}
                    className="text-green-600 font-semibold hover:text-green-700"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get the latest security news and tips delivered to your inbox
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;