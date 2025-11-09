import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "⚛️",
    color: "blue",
    skills: [
      { name: "React Native", level: 85 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    title: "Backend Development",
    icon: "🔧",
    color: "pink",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "Java", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "DevOps & Cloud Engineering",
    icon: "🚀",
    color: "purple",
    skills: [
      { name: "Docker", level: 80 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "AWS Fundamentals", level: 75 },
      { name: "Kubernetes Basics", level: 70 },
      { name: "Infrastructure as Code", level: 75 }
    ]
  },
  {
    title: "Cloud Platforms & Services",
    icon: "☁️",
    color: "blue",
    skills: [
      { name: "AWS (EC2, S3, Lambda, RDS)", level: 75 },
      { name: "Cloud Architecture", level: 75 },
      { name: "Monitoring & Logging", level: 70 },
      { name: "Terraform", level: 70 },
      { name: "CloudFormation", level: 70 }
    ]
  },
  {
    title: "AI & Emerging Tech",
    icon: "🤖",
    color: "blue",
    skills: [
      { name: "GPT-4 & LLMs", level: 80 },
      { name: "AI Integration", level: 85 },
      { name: "VR/AR", level: 80 },
      { name: "Unity", level: 75 },
      { name: "IoT", level: 70 }
    ]
  },
  {
    title: "Data & Automation",
    icon: "🗂️",
    color: "pink",
    skills: [
      { name: "Python", level: 85 },
      { name: "Data Processing", level: 80 },
      { name: "JSON/XML", level: 90 },
      { name: "Database Design", level: 85 },
      { name: "Automation Scripts", level: 80 }
    ]
  },
  {
    title: "Tools & Methodologies",
    icon: "🛠️",
    color: "purple",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Agile/Scrum", level: 90 },
      { name: "Jira", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Maven", level: 80 }
    ]
  }
];

const softSkills = [
  "Team Collaboration",
  "Problem Solving",
  "Communication",
  "Leadership",
  "Project Management",
  "Requirement Analysis",
  "Adaptability",
  "Cross-functional Teamwork",
  "Presentation Skills",
  "Critical Thinking"
];

export default function Skills() {
  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    pink: "from-pink-500 to-pink-600",
    purple: "from-purple-500 to-purple-600"
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive overview of my technical expertise, tools, and professional capabilities developed through education and hands-on experience.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${colorMap[category.color as keyof typeof colorMap]}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Competencies</h2>

          <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-pink-500">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  </div>
                  <span className="text-gray-900 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">DevOps & Cloud Engineering Focus</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Specializations */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <span>🎯</span> Core Specializations
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Containerization", desc: "Docker, container registries, image optimization" },
                  { title: "Orchestration", desc: "Kubernetes fundamentals, deployment strategies" },
                  { title: "CI/CD", desc: "GitHub Actions, Jenkins, automated testing & deployment" },
                  { title: "Infrastructure", desc: "Terraform, CloudFormation, Infrastructure as Code" },
                  { title: "Cloud Platforms", desc: "AWS services, cloud architecture, cost optimization" },
                  { title: "Monitoring", desc: "Prometheus, Grafana, logging, observability" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="font-semibold text-purple-900">{item.title}</p>
                    <p className="text-sm text-purple-700 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Journey */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span>📈</span> Learning Journey
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-900">Current Focus</p>
                  <p className="text-sm text-blue-700 mt-1">Building hands-on experience with Docker, Kubernetes, and AWS</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-900">Next Goals</p>
                  <p className="text-sm text-blue-700 mt-1">AWS Solutions Architect & Kubernetes Administrator certifications</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-900">Practical Projects</p>
                  <p className="text-sm text-blue-700 mt-1">Setting up automated CI/CD pipelines, containerizing applications</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-900">Collaboration</p>
                  <p className="text-sm text-blue-700 mt-1">Contributing to open-source DevOps tools and cloud projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Transition to DevOps */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 rounded-xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🌟 Why DevOps Excites Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Bridging Gap</p>
                <p className="text-gray-700 text-sm">Combining my development expertise with operational thinking to create better systems</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Automation</p>
                <p className="text-gray-700 text-sm">Writing code to solve infrastructure challenges and eliminate manual processes</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Impact</p>
                <p className="text-gray-700 text-sm">Enabling teams to deliver faster, more reliably, and with greater confidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education & Training</h2>

          <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              BSc (Hon) Cloud Computing and A.I
            </h3>
            <p className="text-blue-600 font-semibold mb-1">
              Technological University of the Shannon Athlone
            </p>
            <p className="text-gray-600 mb-6">Athlone, Ireland | Expected Graduation: 07/2026</p>

            <div>
              <p className="text-gray-900 font-semibold mb-4">Core Courses & Knowledge Areas:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Development",
                  "Web Development",
                  "Cloud Development",
                  "Agile Methodologies",
                  "Databases",
                  "Data Structures & Algorithms",
                  "Cloud Computing",
                  "Artificial Intelligence"
                ].map((course) => (
                  <span key={course} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-8">
              <p className="text-5xl font-bold text-blue-600 mb-2">10+</p>
              <p className="text-gray-700 font-semibold">Technical Projects</p>
              <p className="text-gray-600 text-sm mt-2">Completed from conception to deployment</p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl p-8">
              <p className="text-5xl font-bold text-pink-600 mb-2">6+</p>
              <p className="text-gray-700 font-semibold">Tech Stack Areas</p>
              <p className="text-gray-600 text-sm mt-2">Full stack, cloud, AI, and emerging tech</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-8">
              <p className="text-5xl font-bold text-purple-600 mb-2">3+</p>
              <p className="text-gray-700 font-semibold">Years Experience</p>
              <p className="text-gray-600 text-sm mt-2">Internships and project-based work</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how my skills and experience can contribute to your project or organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:Adeogu1234@gmail.com"
              className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get In Touch
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
