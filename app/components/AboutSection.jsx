"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-24 bg-[#F5EEE7]"
    >
      {/* 標題 */}
      <h2 className="text-4xl md:text-5xl font-bold text-black text-center">About</h2>

      {/* 副標 */}
      <p
        className="
    mt-12 mx-auto                      
    max-w-4xl
    text-center
    text-xl sm:text-lg                  
    text-neutral-600
     px-4  sm:px-0                      
  "
      >
        {" "}
        Reflexion is a self-guided emotional reflection system that transforms
        unprocessed emotions into cognitive insight and long-term resilience —
        without requiring a therapist.
      </p>

      {/* 特色卡片群 */}
      <div className="mt-20 grid gap-10 md:grid-cols-3">
        {/* Card 1 */}
        <FeatureCard
          icon={<EmotionIcon className="mx-auto w-12 h-12 text-white" />}
          title="Emotion Labeling"
          desc="Structured identification of dominant emotions, concerns, and cognitive patterns."
        />

        {/* Card 2 */}
        <FeatureCard
          icon={<InsightsIcon className="mx-auto w-12 h-12 text-white" />}
          title="Personalized Insights"
          desc="Follow-up questions based on your past reflections and mood trajectory."
        />

        {/* Card 3 */}
        <FeatureCard
          icon={<TrendsIcon className="mx-auto w-12 h-12 text-white" />}
          title="History & Trends"
          desc="Track emotional shifts over time, with session summaries and monthly insight graphs."
        />
      </div>
    </section>
  );
}

/* ---------- 子元件 ---------- */

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center         
                                         
        w-[100%] max-w-[385px] h-[340px] sm:h-[360px] md:h-[385px]
        rounded-2xl
        bg-[#A2A7C2] shadow shadow-[#A2A7C2] hover:shadow-lg
        transition-all duration-300 ease-in-out
      "
    >
      {" "}
      {icon}
      <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-6 px-8 text-center text-white">{desc}</p>
    </div>
  );
}

/* ---------- Icons with full paths ---------- */

function EmotionIcon(props) {
  return (
    <svg viewBox="0 0 52 52" fill="currentColor" {...props}>
      <path d="M26.0002 47.6667C14.0337 47.6667 4.3335 37.9665 4.3335 26C4.3335 14.0335 14.0337 4.33337 26.0002 4.33337C37.9667 4.33337 47.6668 14.0335 47.6668 26C47.6668 37.9665 37.9667 47.6667 26.0002 47.6667ZM17.3335 28.1667C17.3335 30.4652 18.2466 32.6696 19.8719 34.295C21.4972 35.9203 23.7016 36.8334 26.0002 36.8334C28.2987 36.8334 30.5031 35.9203 32.1284 34.295C33.7537 32.6696 34.6668 30.4652 34.6668 28.1667H17.3335ZM17.3335 23.8334A3.25 3.25 0 1 0 17.3335 17.3334A3.25 3.25 0 0 0 17.3335 23.8334ZM34.6668 23.8334A3.25 3.25 0 1 0 34.6668 17.3334A3.25 3.25 0 0 0 34.6668 23.8334Z" />
    </svg>
  );
}

function InsightsIcon(props) {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc8ab9d420dca681349b2bc37e4cb431d55fff5?placeholderIfAbsent=true&apiKey=235a0c63833248a189ef6b6106f98ae2"
      alt="Insights icon"
      className="mx-auto mt-8 w-12 h-12" /* 保留跟原本 SVG 一樣的大小 & 位置 */
      {...props} /* 讓外層還是能覆寫 className 等屬性 */
    />
  );
}
function TrendsIcon(props) {
  return (
    <svg viewBox="0 0 51 51" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 6.375A2.125 2.125 0 0 0 6.375 4.25 2.125 2.125 0 0 0 4.25 6.375V42.925A4.075 4.075 0 0 0 8.075 47h36.55a2.125 2.125 0 0 0 0-4.25H8.5V6.375Zm37.627 10.002a2.125 2.125 0 1 0-3.004-3.004L29.75 26.745l-6.998-6.997a2.125 2.125 0 0 0-3.004 0L11.25 27.246a2.125 2.125 0 1 0 3.004 3.004l6.998-6.997 6.997 6.997a2.125 2.125 0 0 0 3.004 0l14.874-14.874Z"
      />
    </svg>
  );
}
