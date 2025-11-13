import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            I'm a passionate software developer with a strong foundation in cloud computing, AI, and full-stack development. Currently pursuing a BSc (Hon) in Cloud Computing and A.I at Technological University of the Shannon Athlone. I'm actively transitioning into DevOps and Cloud Engineering, with hands-on experience in modern technologies, containerization, CI/CD pipelines, and agile methodologies.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            My career goal is to become a skilled Cloud/DevOps Engineer, leveraging my full-stack development background to build scalable, resilient infrastructure and optimize deployment processes. I'm passionate about automating workflows, ensuring system reliability, and bridging the gap between development and operations.
          </p>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Email</p>
              <a href="mailto:Adeogu1234@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                Adeogu1234@gmail.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Phone</p>
              <a href="tel:+353876390956" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                +353 876390956
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">LinkedIn</p>
              <a href="https://linkedin.com/in/adeola-ogunnoiki-993469224" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                Adeola Ogunnoiki
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">GitHub</p>
              <a href="https://github.com/adeogu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                adeogu
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4">Irish Citizen</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
          <div className="bg-white border-l-4 border-blue-500 p-8 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">BSc (Hon) Cloud Computing and A.I</h3>
                <p className="text-blue-600 font-semibold mt-1">Technological University of the Shannon Athlone</p>
                <p className="text-gray-600">Athlone, Ireland</p>
              </div>
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">Expected: 07/2026</span>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 font-semibold mb-2">Related Courses:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Development",
                  "Web Development",
                  "Cloud Development",
                  "Agile Methodologies",
                  "Databases",
                  "Data Structures & Algorithms",
                  "Cloud Infrastructure",
                  "DevOps Practices"
                ].map((course) => (
                  <span key={course} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>

          {/* Islington Robotica */}
          <div className="bg-white border-l-4 border-pink-500 p-8 rounded-lg shadow-sm mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Software Engineer Intern</h3>
                <p className="text-pink-600 font-semibold mt-1">Islington Robotica</p>
                <p className="text-gray-600">London, United Kingdom</p>
              </div>
              <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-semibold">06/2025 - 10/2025</span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-pink-500 font-bold mt-1">•</span>
                <span>Collaborating within a cross-functional team to develop a mobile application using React Native and Spring Boot, ensuring compatibility across iOS and Android platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 font-bold mt-1">•</span>
                <span>Implementing authentication flows with Spring Security making sure users have multiple safe ways to onboard on the app</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 font-bold mt-1">•</span>
                <span>Writing JUnit tests for Java files to ensure feature reliability and maintainability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 font-bold mt-1">•</span>
                <span>Working on delivering features in line with Product Requirement Documents (PRDs) provided by the Product Manager, supporting an agile development cycle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 font-bold mt-1">•</span>
                <span>Ensuring app performance and UX consistency across devices and platforms, participating in team stand-ups, code reviews, and Agile sprints</span>
              </li>
            </ul>
          </div>

          {/* Millennium Machinery */}
          <div className="bg-white border-l-4 border-blue-500 p-8 rounded-lg shadow-sm mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Software Engineer Intern</h3>
                <p className="text-blue-600 font-semibold mt-1">Millennium Machinery</p>
                <p className="text-gray-600">Athlone, Ireland</p>
              </div>
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">01/2025 - 05/2025</span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">•</span>
                <span>Integrated an AI-powered chatbot into the company's Shopify storefront using ChainDesk, providing 24/7 customer support and handling 100+ queries in the first month</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">•</span>
                <span>Developed and fine-tuned custom GPT-4 prompts to support customer scenarios, including product comparisons, technical details, and post-sale assistance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">•</span>
                <span>Automated the ingestion of product data using Python scripts, parsing and structuring JSON, Excel, and PDF files into ChainDesk, enabling accurate GPT-4 responses for 70,000+ products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">•</span>
                <span>Led weekly sprint planning and cross-functional team meetings, aligning prompt engineers and developers to ensure timely delivery of all requirements</span>
              </li>
            </ul>
          </div>

          {/* Ithra Aramco */}
          <div className="bg-white border-l-4 border-purple-500 p-8 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Immersive Tech Intern</h3>
                <p className="text-purple-600 font-semibold mt-1">Ithra Aramco</p>
                <p className="text-gray-600">Dhahran, Saudi Arabia</p>
              </div>
              <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">Summer 2022, 2023</span>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold mt-1">•</span>
                <span>Developed a car showcase on Unity where cars and tires would "ride" onto the virtual stage, displaying make and model details, which enhanced user engagement and interactivity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold mt-1">•</span>
                <span>Received specialised training in leveraging state-of-the-art VR/AR/A.I and IoT technologies and applied this knowledge by orchestrating engaging presentations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold mt-1">•</span>
                <span>Reached an audience of 50+ attendees, including representatives from companies like Aramco and Baker Hughes, by demonstrating innovative features and garnering interest from industry leaders</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Working Together?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Adeogu1234@gmail.com"
              className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Email Me
            </a>
            <Link
              to="/projects"
              className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
