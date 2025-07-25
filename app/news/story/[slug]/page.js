/* app/news/exam-stress/page.js ----------------------------------------- */
"use client";
import Image from "next/image";
import ShareButtons from "../../../components/ShareButtons";
import Link from "next/link";

/* ---------------------------------------------------------------------- */
/*  SVG 小元件（可另拆檔案）                                               */
const HomeIcon = () => (
  <svg width="37" height="37" viewBox="0 0 37 37" className="fill-[#707B9E] hover:fill-[#979fbc]">
    <path d="M15.416 29.292V21.583h6.167v7.709c0 .848.694 1.542 1.542 1.542h4.625a1.542 1.542 0 0 0 1.542-1.542V18.5h2.621c.71 0 1.05-.879.51-1.342L19.533 5.55a1.542 1.542 0 0 0-2.066 0L4.579 17.158c-.524.463-.2 1.342.509 1.342h2.621v10.792c0 .848.694 1.542 1.542 1.542h4.625a1.542 1.542 0 0 0 1.542-1.542Z" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="21" height="41" viewBox="0 0 21 41" className="fill-[#687781]">
    <path d="M17.775 21.715 7.875 31.379 5.4 28.963l8.663-8.456L5.4 12.05 7.875 9.635l9.9 9.664a2 2 0 0 1 0 2.416Z" />
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
  pt-8           /* default — phones: no padding  */
  sm:p-5        /* ≥ 640 px:   medium padding    */
  md:p-12       /* ≥ 768 px:   large padding     */
"
      >
        {" "}
        {/* ------------- 導覽列 ------------- */}
        <nav
          aria-label="breadcrumb"
          className="flex flex-wrap items-center gap-4 px-12 md:gap-6 sm:px-5"
        >
          {/* Home */}
          <Link
            href="/"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#707B9E]  "
          >
            <HomeIcon aria-label="Home"/>
          </Link>

          <ArrowIcon className="shrink-0" />

          {/* News */}
          <Link
            href="/news"
            className="text-xl font-semibold text-[#707B9E] hover:text-[#979fbc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#707B9E]"
          >
            News
          </Link>

          <ArrowIcon className="shrink-0" />

          {/* Story */}
          <Link
            href="/news"
            className="text-xl font-semibold text-[#707B9E] hover:text-[#979fbc]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#707B9E]"
          >
            Story
          </Link>
        </nav>
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
          \
          <ShareButtons title="Students use Reflexion for exam stress" />
        </footer>
      </article>
    </main>
  );
}
