"use client";
import React from "react";
import Image from "next/image";

/** 單張卡片元件 */
function FeatureCard({ bg, textColor, iconSrc, title, desc, paddingY = "py-14" }) {
  return (
    <div
      className={`flex flex-col items-start rounded-[20px] ${bg} ${textColor}
                  px-12 ${paddingY} font-medium hover:shadow-lg transition-shadow duration-300`}
    >
      <img src={iconSrc} alt="" width={43} height={43} />
      <h3 className="mt-4 text-2xl">{title}</h3>
      <p className="mt-4 text-lg">{desc}</p>
    </div>
  );
}

export default function KeyFeaturesSection() {
  return (
    <section id="features" className="flex flex-col items-center bg-[#F5EEE7] px-20 py-20 md:px-5">
      {/* 標題 */}
      <h2 className="text-4xl md:text-5xl font-semibold text-black">Key Features</h2>

      {/* 兩行 × 三欄網格 */}
      <div className="mt-10 md:mt-12 lg:mt-16 grid w-full max-w-[1196px] gap-7 md:grid-cols-1 lg:grid-cols-3">      {/* ---- 第一行 ---- */}
        <FeatureCard
          bg="bg-[#DABE9A]"
          textColor="text-white"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8d2224f043dbfd235124f6f858a013dbdb8cd7c5"
          title="Guided Reflection Prompts"
          desc="Thematic questions (life, work, relationships, identity) trigger meaningful introspection."
        />
        <FeatureCard
          bg="bg-[#E5BC86]"
          textColor="text-white"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8d2224f043dbfd235124f6f858a013dbdb8cd7c5"
          title="Emotion Recognition"
          desc="NLP-assisted tagging of core emotions plus concern, avoidance, cognitive distortion."
          paddingY="py-[52px]" /* 第一行第二張卡稍微不同的 padding */
        />
        <FeatureCard
          bg="bg-[#5E4524]"
          textColor="text-white"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/8d2224f043dbfd235124f6f858a013dbdb8cd7c5"
          title="Empathic Feedback"
          desc="Language-level validation that affirms emotional reality without diagnosis."
          paddingY="py-[52px]"
        />

        {/* ---- 第二行 ---- */}
        <FeatureCard
          bg="bg-[#FFF1E1] border border-black"
          textColor="text-neutral-700"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e7954dad0ff56e924fc136975e7fd0586b0baee0"
          title="Personalized Insight Prompts"
          desc="Follow-up questions drive deeper self-understanding."
          paddingY="py-[52px]"
        />
        <FeatureCard
          bg="bg-[#FFF1E1] border border-black"
          textColor="text-neutral-700"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e7954dad0ff56e924fc136975e7fd0586b0baee0"
          title="Session Summary Reports"
          desc="Exportable PDF for personal use or mental-health discussion."
          paddingY="py-[52px]"
        />
        <FeatureCard
          bg="bg-[#FFF1E1] border border-black"
          textColor="text-neutral-700"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e7954dad0ff56e924fc136975e7fd0586b0baee0"
          title="Monthly & Yearly Insights"
          desc="Visual charts tracking mood trends, behavior shifts, and progress over time."
          paddingY="py-[52px]"
        />
      </div>
    </section>
  );
}