/* app/news/exam-stress/page.js ----------------------------------------- */
"use client";
import Image from "next/image";

/* ---------------------------------------------------------------------- */
/*  SVG 小元件（可另拆檔案）                                               */
const HomeIcon = () => (
  <svg width="37" height="37" viewBox="0 0 37 37" className="fill-[#707B9E]">
    <path d="M15.416 29.292V21.583h6.167v7.709c0 .848.694 1.542 1.542 1.542h4.625a1.542 1.542 0 0 0 1.542-1.542V18.5h2.621c.71 0 1.05-.879.51-1.342L19.533 5.55a1.542 1.542 0 0 0-2.066 0L4.579 17.158c-.524.463-.2 1.342.509 1.342h2.621v10.792c0 .848.694 1.542 1.542 1.542h4.625a1.542 1.542 0 0 0 1.542-1.542Z" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="21" height="41" viewBox="0 0 21 41" className="fill-[#687781]">
    <path d="M17.775 21.715 7.875 31.379 5.4 28.963l8.663-8.456L5.4 12.05 7.875 9.635l9.9 9.664a2 2 0 0 1 0 2.416Z" />
  </svg>
);

/* 兩個分享社群 Icon（facebook / twitter）。可再補 LinkedIn 等 ---------- */
const FacebookIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" className="fill-[#707B9E]">
    <path d="M23.75 3.75a2.5 2.5 0 0 1 2.5 2.5v17.5a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5V6.25a2.5 2.5 0 0 1 2.5-2.5h17.5Zm-.625 19.375V16.5c0-3.084-2.475-4.075-4.075-4.075-1.038 0-1.85.425-2.475 1.4V12.662h-3.488V23.125h3.488v-6.163c0-.962.775-1.75 1.737-1.75.464 0 .909.184 1.237.513.329.328.513.773.513 1.237v6.163h3.563ZM8.6 10.7a2.1 2.1 0 1 0 0-4.213 2.1 2.1 0 0 0 0 4.213ZM10.338 23.125V12.663H6.875v10.462h3.463Z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" className="fill-[#707B9E]">
    <path d="M27.5 6.588c-1.104.453-2.294.75-3.528.892 1.262-.686 2.237-1.773 2.696-3.08-1.19.647-2.509 1.1-3.9 1.359C21.635 4.647 20.043 4 18.235 4 14.865 4 12.113 6.485 12.113 9.552c0 .44.057.867.158 1.268-5.106-.233-9.651-2.446-12.677-5.797-.531.815-.832 1.773-.832 2.782 0 1.928 1.075 3.636 2.739 4.607-1.018 0-1.965-.259-2.796-.647v.039c0 2.692 2.122 4.944 4.933 5.449-.903.224-1.85.255-2.768.091.389 1.103 1.152 2.068 2.181 2.76 1.03.692 2.273 1.076 3.556 1.097-2.174 1.554-4.87 2.394-7.643 2.382-.488 0-.975-.026-1.463-.078C5.725 25.081 8.966 26 12.436 26c11.3 0 17.51-8.463 17.51-15.801 0-.246 0-.479-.015-.725A11.06 11.06 0 0 0 27.5 6.588Z" />
  </svg>
);

/* ---------------------------------------------------------------------- */
/*  文章頁元件                                                             */
export default function ExamStressArticle() {
  return (
    <main className="min-h-screen bg-[#F5EEE7] py-0">
      <article
        className="
  relative mx-auto max-w-5xl rounded-lg border border-[#DEDBD9] bg-white shadow-lg
  p-0           /* default — phones: no padding  */
  sm:p-5        /* ≥ 640 px:   medium padding    */
  md:p-12       /* ≥ 768 px:   large padding     */
"
      >
        {" "}
        {/* ------------- 導覽列 ------------- */}
        <header className="flex flex-wrap items-center gap-4 px-12 pt-12 md:gap-6 md:px-12 sm:px-5">
          <HomeIcon />
          <ArrowIcon />
          <span className="text-xl font-semibold text-[#707B9E]">News</span>
          <ArrowIcon />
          <span className="text-xl font-semibold text-[#707B9E]">Story</span>
        </header>
        {/* ------------- 主標題 ------------- */}
        <h1
          className="
    mt-4 max-w-4xl px-12
    text-3xl               /* 預設手機 */
    md:text-[64px]         /* ≥ 768px 放大 */
    lg:text-5xl            /* ≥ 1024px 再縮小 */
    font-extrabold leading-tight text-[#7F85AA]
    sm:px-5 hover:text-[#707B9E]
  "
        >
          Students use Reflexion for exam stress
        </h1>
        {/* ------------- 日期 & 前言 ------------- */}
        <section className="mt-10 flex flex-col gap-6 px-12 md:flex-row md:items-start md:gap-6 sm:px-5">
          <div className="flex items-center gap-6">
            <time
              dateTime="2025-05-28"
              className="block w-28 shrink-0 text-lg font-bold text-[#525252]"
            >
              2025-05-28
            </time>
            <span className="hidden h-24 w-px bg-[#525252] md:block" />
          </div>
          <div className="flex items-center h-full">
            <p className="max-w-3xl text-lg leading-relaxed text-[#525252]">
              As exam season intensified, students across the country turned to
              Reflexion to manage anxiety, regain focus, and regulate emotions
              during peak academic pressure.
            </p>
          </div>
        </section>
        {/* ------------- 作者資訊 ------------- */}
        <section className="mt-10 flex flex-col gap-6 px-12 md:flex-row md:items-start sm:px-5">
          {/* avatar */}
          <Image
            src="/reflexion-avatar.png"
            alt="Reflexion Team avatar"
            width={83}
            height={83}
            className="rounded-full hover:shadow-lg md:w-20 md:h-20 sm:w-16 sm:h-16"
          />
          <div>
            <h4 className="text-base font-semibold text-[#525252]">
              Reflexion Team
            </h4>
            <p className="max-w-xl text-base text-[#525252]">
              The Reflexion Team is a group of interdisciplinary researchers,
              designers, and engineers.
            </p>
          </div>
        </section>
        {/* ------------- Hero 圖（示意用灰底） ------------- */}
        {/* ------------- Cover image ------------- */}
        <div className="relative mx-12 mt-10 h-[580px] rounded-2xl bg-[#D9D9D9] sm:mx-5 sm:h-[300px]">
          {/* Image is scaled down with no cropping;  
      any leftover area keeps the grey background */}
          <Image
            src="/exam-stress-cover.png"
            alt="Students using Reflexion to manage exam stress"
            fill /* makes the image stretch to the wrapper */
            className="object-contain" /* show whole image, keep aspect ratio */
            sizes="(min-width: 640px) 100vw, 640px" /* optional: fine-tune */
          />
        </div>
        {/* ------------- 內文 Block ------------- */}
        <section className="space-y-10 px-12 py-10 sm:px-5">
          {/* ---- 子標題 ---- */}
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            Why Reflexion During Exams?
          </h2>
          {/* ---- 內文 ---- */}
          <p className="max-w-4xl text-lg text-black">
            Students often experience racing thoughts, panic, and burnout in the
            weeks leading up to exams. Reflexion’s real-time emotional check-ins
            and structured cognitive prompts offered them a calm space to
            externalize stress without judgment.
          </p>

          {/* ---- 引言 ---- */}
          <blockquote className="rounded-lg bg-[#EFEAF7] p-10 text-lg font-bold text-[#525C79]">
            “I didn’t know how overwhelmed I was until I saw my emotion timeline
            — it helped me get out of my own head.” — Serena, sophomore at Rice
            University
          </blockquote>

          {/* ---- 第二段 ---- */}
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            Top Emotional Patterns Detected
          </h2>
          <p className="max-w-4xl text-lg text-black">
            Our system detected recurring themes such as perfectionism, fear of
            failure, and procrastination guilt. Many students also reflected on
            deeper fears related to identity, self-worth, and family
            expectations.
          </p>
          <blockquote className="rounded-lg bg-[#EFEAF7] p-10 text-lg font-bold text-[#525C79]">
            “I used it every night before bed. It helped me separate thoughts
            from reality and sleep better.” — Daniel, senior at UT Austin
          </blockquote>

          <p className="max-w-4xl text-lg text-black">
            This pilot validated Reflexion’s use in high-stakes academic stress
            and opens new pathways for deployment in student wellness programs.
          </p>
        </section>
        {/* ------------- 底部分隔線 ------------- */}
        <hr className="mx-12 h-px border-0 bg-[#687781] sm:mx-5 mb-4" />
        {/* ------------- Tags + Share ------------- */}
        <footer className="flex flex-wrap items-center justify-between gap-6 px-12 pb-12 sm:flex-col sm:items-start sm:px-5">
          {/* 標籤列 */}
          <div className="flex flex-wrap gap-4 ">
            {["Student Programs", "Mental Wellness", "Stress Management"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-md bg-[#1E3958] px-9 py-2 text-base font-bold text-white hover:bg-[#0F1F35] transition-colors"
                >
                  {t}
                </span>
              )
            )}
          </div>

          {/* share */}
          <div className="flex items-center gap-6 self-end">
            <span className="text-lg font-bold text-[#525252]">Share:</span>
            <div className="flex gap-4">
              <FacebookIcon className="hover:bg-[#525252]" />
              <TwitterIcon />
              {/* 再加其他 icon  */}
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
