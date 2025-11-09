import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-30 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-200 rounded-full opacity-30 blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Welcome to my portfolio
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Adeola</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                A passionate full-stack software developer specializing in cloud computing, AI integration, and modern web applications. Currently pursuing BSc (Hon) Cloud Computing and A.I at Technological University of the Shannon.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors transform hover:scale-105"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-pink-100 to-blue-100 rounded-2xl opacity-60 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-black rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">💻</span>
                  </div>
                  <p className="text-gray-700 font-semibold">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image/Visual */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-96 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <p className="text-6xl mb-4">🚀</p>
                  <p className="text-gray-600 font-semibold">Building innovative solutions</p>
                </div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About Me</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  I'm a dedicated software developer passionate about creating elegant solutions through full-stack development, cloud computing, and AI integration. Currently pursuing a BSc (Hon) in Cloud Computing and A.I at Technological University of the Shannon.
                </p>
                <p>
                  With hands-on experience in React, Spring Boot, Python, and emerging technologies like VR/AR, I've worked on diverse projects ranging from mobile applications to AI-powered solutions. I thrive in collaborative, agile environments where I can contribute technical expertise while learning from talented teams.
                </p>
                <p>
                  I'm driven by curiosity and continuous learning, always exploring new technologies and methodologies to improve my craft and deliver better solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">10+</p>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-pink-600">3+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Read My Full Story →
                </Link>
                <Link
                  to="/projects"
                  className="inline-block px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600">A diverse toolkit for modern development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  React & React Native
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Spring Boot & Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  REST APIs
                </li>
              </ul>
            </div>

            {/* Cloud & AI */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cloud & AI</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Cloud Computing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  GPT-4 & AI Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  VR/AR & IoT
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/skills"
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@example.com"
              className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send me an email
            </a>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © {new Date().getFullYear()} Adeola Ogunnoiki. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="https://github.com/adeogu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/adeola" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="mailto:Adeogu1234@gmail.com" className="hover:text-white transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
