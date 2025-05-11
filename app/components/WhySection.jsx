"use client";
import React from "react";

export default function WhySection() {
  return (
    /* base: px-4 → sm: px-10 → lg: px-20 */
    <section className="flex flex-col items-center justify-center bg-[#F5EEE7] px-4 sm:px-10 lg:px-20 py-16">
      {/* 內層白底卡片 */}
      <div className="flex w-full max-w-[1234px] flex-col items-stretch rounded-[20px] border border-white bg-[#FFFAF3] px-6 pb-20 pt-14 sm:px-8 lg:px-10">
        {/* 標題：base 4xl → md 5xl */}
        <h2 className="self-center text-4xl md:text-5xl font-semibold text-black">
          Why It Matters
        </h2>

        {/* 內容區：桌機左右／手機直排 */}
        <div className="mt-24 md:mt-10 lg:mt-12 grid gap-14 md:grid-cols-1 lg:grid-cols-[40%_auto]">
          {/* 左側圖片 */}
          <div className="flex w-full flex-grow">
            <img
              src="/phone-2.png"
              alt="Why it matters illustration"
              width={800}
              height={640}
              className="h-auto w-full rounded-[20px] bg-[rgba(161,141,214,0.07)] object-contain transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              />
          </div>

          {/* 右側文字敘述 */}
          <p className="mt-10 text-lg font-normal text-black md:mt-0">
            <strong>Emotional neglect is invisible — but deeply costly.</strong>
            <br />
            <br />
            Many underserved individuals, including immigrants and low-income
            workers, suppress emotional distress due to cultural pressure or
            survival needs. But unresolved emotions don’t disappear — they
            function like background processes, draining cognitive bandwidth and
            affecting life decisions.
            <br />
            <br />
            <strong>Reflexion</strong> offers a lightweight, accessible, and
            stigma-free path to emotional literacy.
          </p>
        </div>
      </div>
    </section>
  );
}