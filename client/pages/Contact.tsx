import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:Adeogu1234@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm always interested in hearing about new opportunities, projects, or just having a conversation about technology. Feel free to reach out!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contact Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Email</h3>
              </div>
              <a
                href="mailto:Adeogu1234@gmail.com"
                className="text-blue-600 hover:text-blue-700 text-lg font-semibold break-all"
              >
                Adeogu1234@gmail.com
              </a>
              <p className="text-gray-600 mt-2">I typically respond within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-pink-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-2xl">
                  📱
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Phone</h3>
              </div>
              <a
                href="tel:+353876390956"
                className="text-pink-600 hover:text-pink-700 text-lg font-semibold"
              >
                +353 876390956
              </a>
              <p className="text-gray-600 mt-2">Available for calls and messages</p>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  💼
                </div>
                <h3 className="text-2xl font-bold text-gray-900">LinkedIn</h3>
              </div>
              <a
                href="https://linkedin.com/in/adeola-ogunnoiki-993469224"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-lg font-semibold"
              >
                Adeola Ogunnoiki
              </a>
              <p className="text-gray-600 mt-2">Connect with me professionally</p>
            </div>

            {/* GitHub */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-purple-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                  👨‍💻
                </div>
                <h3 className="text-2xl font-bold text-gray-900">GitHub</h3>
              </div>
              <a
                href="https://github.com/adeogu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 text-lg font-semibold"
              >
                adeogu
              </a>
              <p className="text-gray-600 mt-2">Check out my code and projects</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-xl p-8 mt-8 text-center">
            <p className="text-gray-900 font-semibold mb-2">📍 Location</p>
            <p className="text-gray-600 text-lg">Athlone, Ireland</p>
            <p className="text-gray-600 text-sm mt-2">Irish Citizen | Open to opportunities worldwide</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Me a Message</h2>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="What is this about?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>

            <p className="text-center text-sm text-gray-600">
              By sending this message, you agree to the contact information being used to respond to your inquiry.
            </p>
          </form>
        </div>
      </section>

      {/* Quick Response Times */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Expected Response Times</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">📧</p>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">Within 24 hours</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-pink-600 mb-2">📱</p>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600">During business hours</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-purple-600 mb-2">💬</p>
                <p className="font-semibold text-gray-900">Message</p>
                <p className="text-gray-600">Within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            Not ready to reach out yet? Explore my projects and skills first.
          </p>
          <Link
            to="/projects"
            className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            View My Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
