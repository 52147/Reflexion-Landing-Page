import React, { useState, useEffect } from "react";

export default function ReflexionLandingPage() {
  const testimonials = [
    {
      quote:
        "Reflexion helped me understand the emotional patterns that were holding me back. It’s like having a therapist in your pocket.",
      author: "Anonymous User (Software Engineer)",
    },
    {
      quote:
        "This tool gave me clarity during my most chaotic periods. It's reflective, personal, and deeply helpful.",
      author: "Freelancer in NYC",
    },
    {
      quote:
        "I’ve used mental health apps before, but nothing digs as deep or feels this honest.",
      author: "Graduate Student, Public Health",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // ⏱ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 font-sans flex flex-col items-center justify-center space-y-12 rounded-xl">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Reflexion
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10">
          AI-Powered Self-Reflection Platform for Deep Emotional Insight
        </p>
        <div className="flex justify-center mb-4">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWtjNHJpaDFnN3Nya3lodHkydmRiMW1iZW45ZmRnbGpkNWNrZ2xjcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lyYPqlj7akpfv7kTC4/giphy.gif"
            alt="Demo GIF"
            className="w-full max-w-xl rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center space-y-4 sm:space-y-0">
          <div className="relative flex flex-col items-center">
            <a
              href="https://sentiment-psychology-analysis-frontend.vercel.app/"
              target="_blank"
              className="bg-blue-200 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow shadow-blue-500/50"
            >
              Try Live Demo
            </a>
            <div className="absolute top-full mt-1 bg-black text-white text-xs px-3 py-1 rounded shadow z-50">
              Viewer Mode only – GPT-4 gated due to API cost
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/15d0BJcpw4RgEgi8cD6R3v1TzHzKVxb1G/view?usp=sharing"
            target="_blank"
            className="border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-gray-900"
          >
            Watch Demo Video
          </a>
          <a
            href="https://github.com/52147/Sentiment-Psychology-Analysis-Backend"
            target="_blank"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded"
          >
            GitHub Repo
          </a>
        </div>
      </section>

      {/* Horizontal Feature Cards */}
      <section className="mt-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">U.S. Relevance</h3>
            <p className="text-gray-300">
              Reflexion contributes to the U.S. national interest in expanding
              scalable, AI-powered mental health access.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">GPT + NLP Pipeline</h3>
            <p className="text-gray-300">
              Combines fine-tuned HuggingFace models and GPT-3.5 Turbo to create
              multi-layer emotional analysis.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Emotion Radar Chart</h3>
            <p className="text-gray-300">
              Users see a radar chart visualizing anxiety, confidence,
              overthinking, aggression, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="mt-24 max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">
          Mental Health for the Underserved
        </h2>
        <p className="text-gray-300">
          Reflexion lowers the barrier to emotional insight for immigrants,
          freelancers, and those without access to therapy.
        </p>
      </section>
      {/* Testimonial Section with Auto Carousel */}
      <section className="mt-24 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400">
          What People Are Saying
        </h2>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transition duration-300 ease-in-out">
          <p className="italic text-gray-300">
            "{testimonials[testimonialIndex].quote}"
          </p>
          <p className="mt-4 font-semibold text-white">
            — {testimonials[testimonialIndex].author}
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="mt-24 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-400">
          Read More on Reflexion
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://dev.to/shoutzu_han_a327ff8a7342/designing-ai-driven-self-reflection-beyond-mood-tracking-g16"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl text-left transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Designing AI-Driven Self-Reflection
            </h3>
            <p className="text-gray-300">
              A technical deep dive on how the system was architected using GPT,
              NLP, and adversarial analysis.
            </p>
          </a>

          <a
            href="https://404-ai-not-found-i6h1.vercel.app/blog/Designing-AI-Driven-Self-Reflection"
            target="_blank"
            className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl text-left transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Philosophy Behind the System
            </h3>
            <p className="text-gray-300">
              From therapy models to product UX—why Reflexion is more than just
              a mood tracker.
            </p>
          </a>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="mt-24 max-w-4xl mx-auto text-left space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-400 text-center mb-6">
          Frequently Asked Questions
        </h2>

        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">
            Is this app a replacement for therapy?
          </h3>
          <p className="text-gray-300">
            Reflexion is a supplement to self-reflection and insight—not a
            clinical substitute. It’s designed for private, guided emotional
            clarity.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">
            Do I need to pay to use it?
          </h3>
          <p className="text-gray-300">
            No. The live demo is fully accessible. Long-term models and advanced
            analytics may introduce tiers in the future.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">Is my data stored?</h3>
          <p className="text-gray-300">
            No user data is stored or logged in the current demo version. All
            input is local to your session.
          </p>
        </div>
      </section>

      {/* Community CTA */}
      <section className="mt-24 mx-auto text-center space-y-4 bg-gray-800 p-6 rounded-xl shadow w-full max-w-8xl mb-6 mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400 py-2 px-6">
          Join the Reflexion Community
        </h2>
        <p className="text-gray-300">
          Be part of a supportive community focused on mental well-being and
          emotional growth.
        </p>
        <a
          href="https://discord.gg/your_discord_link"
          target="_blank"
          className="bg-blue-200 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow shadow-blue-500/50"
        >
          Join Discord
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        Built by Shou-Tzu Han ·{" "}
        <a
          className="underline"
          href="https://404-ai-not-found-i6h1.vercel.app/"
          target="_blank"
        >
          404 AI Not Found
        </a>
      </footer>
    </div>
  );
}
