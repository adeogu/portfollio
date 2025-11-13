import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const projects = [
  {
    title: "Dots and Boxes Game",
    date: "06/2024 - 09/2024",
    description: "Developed an interactive multiplayer game combining real-time web technologies with full-stack development. Players compete in a classic dots and boxes game with up to 5 players online or locally.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Socket.IO", "Express.js"],
    highlights: [
      "Implemented real-time multiplayer gameplay with Socket.IO",
      "Built server-side game logic managing state, player connections, and turn management",
      "Created responsive UI for lobby management and game interactions",
      "Deployed with Express.js for serving static files and API routing",
      "Developed comprehensive server functions for game mechanics and player management"
    ],
    color: "purple",
    github: "https://github.com/adeogu/DotsAndBoxesGame/tree/adeogu-patch-1"
  },
  {
    title: "Book License Management System",
    date: "04/2023 - 06/2023",
    description: "Developed a comprehensive book license management system with a full backend infrastructure and robust database design.",
    technologies: ["Java", "Spring Boot", "Apache Maven", "H2", "REST API"],
    highlights: [
      "Built scalable backend with Spring Boot",
      "Designed and implemented relational database with H2",
      "Created RESTful API endpoints for license management",
      "Tested endpoints using Postman"
    ],
    color: "blue"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A showcase of my technical work spanning mobile development, AI integration, immersive technologies, and backend systems.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {projects.map((project, index) => {
              const colorMap = {
                blue: { border: "border-blue-500", bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
                pink: { border: "border-pink-500", bg: "bg-pink-50", text: "text-pink-600", badge: "bg-pink-100 text-pink-700" },
                purple: { border: "border-purple-500", bg: "bg-purple-50", text: "text-purple-600", badge: "bg-purple-100 text-purple-700" }
              };

              const colors = colorMap[project.color as keyof typeof colorMap];

              return (
                <div key={index} className={`bg-white border-l-4 ${colors.border} p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                      {project.company && (
                        <p className={`${colors.text} font-semibold mt-1`}>{project.company}</p>
                      )}
                    </div>
                    <span className={`text-sm ${colors.badge} px-3 py-1 rounded-full font-semibold whitespace-nowrap`}>
                      {project.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-lg mb-6">{project.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className={`${colors.text} font-bold mt-1`}>✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  {project.github && (
                    <div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 ${colors.text} hover:underline font-semibold`}
                      >
                        View on GitHub →
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to See More?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out my GitHub for more projects and contributions to open-source initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/adeogu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Visit GitHub
            </a>
            <Link
              to="/skills"
              className="px-8 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              View My Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
