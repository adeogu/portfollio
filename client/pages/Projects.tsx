import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 py-20">
            <h1 className="text-5xl font-bold text-gray-900">Projects</h1>
            <p className="text-xl text-gray-600">
              Showcase your best work here. Share your projects with live demos and GitHub links.
            </p>
            <p className="text-gray-500">
              Continue prompting to fill in your projects content and details.
            </p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
