import React from "react";

export default function About() {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white px-6 py-12 font-sans flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">About Reflexion Lab</h1>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 h-70">
            <h2 className="text-3xl font-bold text-blue-300">Mission</h2>
            <p className="text-gray-300 mt-12">
              <strong className="text-white">Reflexion Lab</strong> is a civic
              initiative founded by Shou-Tzu Han to explore how AI can expand
              emotional equity, accessibility, and psychological support for
              underserved populations.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 h-70">
            <h2 className="text-3xl font-bold text-blue-300 mb-2">Focus</h2>
            <p className="text-gray-300 mt-12">
              We operate at the intersection of AI, mental health, and HCI —
              applying LLMs to real-world emotional needs, especially among
              immigrant and marginalized communities.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 h-70">
            <h2 className="text-3xl font-bold text-blue-300 mb-2">Vision</h2>
            <p className="text-gray-300 mt-12">
              This platform is not a commercial app but a public-interest system
              committed to emotional autonomy, privacy, and scalable
              introspection tools.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:scale-105 h-70">
            <h2 className="text-3xl font-bold text-blue-300 mb-2">Access</h2>
            <p className="text-gray-300 mt-12">
              Reflexion democratizes psychological insight — enabling guided
              self-reflection without cost, stigma, or cultural mismatch.
            </p>
          </div>
        </div>
        <div className="mt-16 text-gray-400 text-center text-sm">
          For press inquiries, collaboration opportunities, or to support our
          mission, please contact:
          <br />
          <a
            href="mailto:ainotfound404321@gmail.com"
            className="text-white font-bold hover:text-blue-400 transition duration-200 hover:underline text-lg"
          >
            ainotfound404321@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
