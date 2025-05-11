"use client";
import React, { useState } from "react";

/* FAQ 內容 ------------------------------------------------------- */
const FAQS = [
  {
    q: "What is Reflexion, and how does it work?",
    a: (
      <>
        Reflexion is a self-guided emotional reflection system that helps users
        identify, interpret, and transform their emotional patterns. It uses
        structured prompts and AI-generated insight to encourage cognitive
        processing and self-awareness over time — <strong>without</strong>{" "}
        requiring a therapist.
      </>
    ),
  },
  {
    q: "How is Reflexion different from mood trackers or journaling apps?",
    a: (
      <>
        Unlike traditional journaling or mood logs, Reflexion integrates:
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>Emotion labeling with CBT-informed structure</li>
          <li>
            Pattern recognition (concern, avoidance, cognitive distortion)
          </li>
          <li>Empathic feedback and follow-up questions for insight</li>
          <li>Exportable session summaries & emotional trend reports</li>
        </ul>
        <br />
        Reflexion focuses not just on <em>what</em> you feel, but also on{" "}
        <em>what that emotion means</em> and <em>where it can lead</em>.
      </>
    ),
  },
  {
    q: "Who is Reflexion designed for?",
    a: (
      <>
        Reflexion is especially helpful for:
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>Individuals without access to therapy or support</li>
          <li>Immigrants navigating cultural / identity stress</li>
          <li>
            Low-income professionals managing burnout, invisibility, or
            isolation
          </li>
          <li>Anyone seeking deeper emotional literacy & mental resilience</li>
        </ul>
      </>
    ),
  },
  {
    q: "Is Reflexion a clinical or diagnostic tool?",
    a: (
      <>
        No. Reflexion is <strong>not</strong> a clinical diagnostic system. It
        is a self-reflection assistant that supports emotional growth and
        insight-building using psychological models, but it does not replace
        professional mental-health care.
      </>
    ),
  },
  {
    q: "What’s the science behind it?",
    a: (
      <>
        Reflexion is built on concepts from:
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>Cognitive Behavioral Therapy (CBT)</li>
          <li>Emotion-Focused Therapy (EFT)</li>
          <li>Narrative psychology & self-insight modeling</li>
        </ul>
        <br />
        Its structure is designed to reflect emotional logic, validate personal
        experience, and promote healthier interpretation patterns.
      </>
    ),
  },
  {
    q: "What kind of insights can I expect?",
    a: (
      <>
        After each reflection session, users receive:
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>Emotion summary with concern / avoidance patterns</li>
          <li>
            Detected cognitive distortions (e.g.&nbsp;disqualifying the
            positive)
          </li>
          <li>Empathic interpretation feedback</li>
          <li>Optional PDF summary download</li>
          <li>Monthly & yearly mood-trend charts</li>
        </ul>
      </>
    ),
  },
  {
    q: "Is this just a prototype?",
    a: (
      <>
        The current version is a mobile-first interactive prototype designed to
        simulate full user flow and insight generation. It includes all core UI
        logic, emotional structuring, and PDF export, and is under active
        development for:
        <ul className="list-disc pl-6 mt-4 space-y-1">
          <li>Backend API integration</li>
          <li>Usage throttling</li>
          <li>Authentication & data logging</li>
        </ul>
      </>
    ),
  },
  {
    q: "Who created Reflexion?",
    a: (
      <>
        Reflexion was developed by Shou-Tzu Han, a cognitive-systems designer
        with a background in AI, emotional computing, and digital equity. The
        system was built as a personal response to the emotional neglect often
        experienced in high-pressure, underserved environments.
      </>
    ),
  },
  {
    q: "Can I try it?",
    a: (
      <>
        Yes! The interactive UI demo is available online, with limited
        functionality.{" "}
        <a
          href="#"
          className="underline text-[#707B9E] hover:text-[#55608a] font-medium"
        >
          Try the demo
        </a>
        .
      </>
    ),
  },
];

function AccordionItem({ idx, openIdx, setOpenIdx, q, a }) {
  const open = openIdx === idx;
  return (
    <div className="rounded-[20px] border border-black bg-[#FBEAD2] shadow-md">
      <button
        onClick={() => setOpenIdx(open ? null : idx)}
        className="w-full text-left px-10 py-8 md:px-6 md:py-6 flex justify-between gap-6"
      >
        <h3 className="text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-medium leading-snug">
          {q}
        </h3>
        <span
          className={`mt-1 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="px-10 pb-10 md:px-6">
          <p className="text-[24px] leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null); // 只保留一個開啟
  return (
    <section
      id="faq"
      className="flex flex-col items-center bg-[#F5EEE7] px-4 sm:px-6 md:px-20 py-24 md:py-32"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-14 text-neutral-700">
        FAQ
      </h2>

      <div className="w-full max-w-[1000px] flex flex-col gap-8 text-neutral-700">
        {FAQS.map((item, idx) => (
          <AccordionItem
            key={item.q}
            idx={idx}
            openIdx={openIdx}
            setOpenIdx={setOpenIdx}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
