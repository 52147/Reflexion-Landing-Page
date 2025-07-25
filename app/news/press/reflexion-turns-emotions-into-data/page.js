/* app/press/reflexion-turns-emotions-into-data/page.js ------------------ */
"use client";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "../../../components/ShareButtons"; // adjust path if needed

/* ---------------------------------------------------------------------- */
/* SVG 小元件（可另拆檔案）                                                */
const HomeIcon = () => (
  <svg
    width="37"
    height="37"
    viewBox="0 0 37 37"
    className="fill-[#707B9E] hover:fill-[#979fbc]"
  >
    <path d="M15.416 29.292V21.583h6.167v7.709c0 .848.694 1.542 1.542 1.542h4.625a1.542 1.542 0 0 0 1.542-1.542V18.5h2.621c.71 0 1.05-.879.51-1.342L19.533 5.55a1.542 1.542 0 0 0-2.066 0L4.579 17.158c-.524.463-.2 1.342.509 1.342h2.621v10.792c0 .848.694 1.542 1.542 1.542h4.625a1.542 1.542 0 0 0 1.542-1.542Z" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="21" height="41" viewBox="0 0 21 41" className="fill-[#687781]">
    <path d="M17.775 21.715 7.875 31.379 5.4 28.963l8.663-8.456L5.4 12.05 7.875 9.635l9.9 9.664a2 2 0 0 1 0 2.416Z" />
  </svg>
);

/* ---------------------------------------------------------------------- */
/* 文章頁元件                                                              */
export default function PressArticle() {
  return (
    <main className="min-h-screen bg-[#F5EEE7] py-0">
      <article
        className="
          relative mx-auto max-w-5xl rounded-lg border border-[#DEDBD9] bg-white shadow-lg
          pt-8           /* phones */
          sm:p-5        /* ≥ 640 px */
          md:p-12       /* ≥ 768 px */
        "
      >
        {/* ------------ 導覽列 ------------ */}
        <nav
          aria-label="breadcrumb"
          className="flex flex-wrap items-center gap-4 px-12 md:gap-6 sm:px-5"
        >
          <Link
            href="/"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#707B9E]"
          >
            <HomeIcon aria-label="Home" />
          </Link>
          <ArrowIcon className="shrink-0" />

          <Link
            href="/news"
            className="text-xl font-semibold text-[#707B9E] hover:text-[#979fbc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#707B9E]"
          >
            News
          </Link>

          <ArrowIcon className="shrink-0" />

          <Link
            href="/news"
            className="text-xl font-semibold text-[#707B9E] hover:text-[#979fbc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#707B9E]"
          >
            Press
          </Link>
        </nav>

        {/* ------------ 主標題 ------------ */}
        <h1
          className="
            mt-4 max-w-4xl px-12
            text-3xl md:text-[64px] lg:text-5xl
            font-extrabold leading-tight text-[#7F85AA]
            sm:px-5 hover:text-[#707B9E]
          "
        >
          Reflexion turns emotions into data
        </h1>

        {/* ------------ 日期 & 前言 ------------ */}
        <section className="mt-10 flex flex-col gap-6 px-12 md:flex-row md:items-start md:gap-6 sm:px-5">
          <div className="flex items-center gap-6">
            <time
              dateTime="2025-07-17"
              className="block w-28 shrink-0 text-lg font-bold text-[#525252]"
            >
              2025-07-17
            </time>
            <span className="hidden h-24 w-px bg-[#525252] md:block" />
          </div>

          <div className="flex items-center h-full">
            <p className="max-w-3xl text-lg leading-relaxed text-[#525252]">
              A new approach to understanding user emotions through Reflexion’s
              advanced&nbsp;AI techniques.
            </p>
          </div>
        </section>

        {/* ------------ 作者資訊 ------------ */}
        <section className="mt-10 flex flex-col gap-6 px-12 md:flex-row md:items-start sm:px-5">
          <Image
            src="/reflexion-avatar.png" /* reuse your team avatar */
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

        {/* ------------ Cover Image ------------ */}
        <div className="relative mx-12 mt-10 h-[580px] rounded-2xl bg-[#D9D9D9] sm:mx-5 sm:h-[300px]">
          <Image
            src="/press-reflexion-data-cover.png" /* add this asset */
            alt="Illustration of data flowing from emotions"
            fill
            className="object-contain"
            sizes="(min-width: 640px) 100vw, 640px"
          />
        </div>

        {/* ------------ 內文 ------------ */}
        <section className="space-y-10 px-12 py-10 sm:px-5">
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            From Feelings&nbsp;→&nbsp;Signals
          </h2>
          <p className="max-w-4xl text-lg text-black">
            Reflexion’s latest breakthrough converts qualitative emotional cues
            into structured data streams, enabling product teams and researchers
            to quantify user sentiment at scale&nbsp;— without compromising
            privacy.
          </p>

          <blockquote className="rounded-lg bg-[#EFEAF7] p-10 text-lg font-bold text-[#525C79]">
            “This technology bridges the empathy gap between numbers and human
            experience.” — Dr.&nbsp;Anna Li, MIT Media Lab
          </blockquote>

          <h2 className="text-3xl font-bold text-black md:text-4xl">
            How the Model Works
          </h2>
          <p className="max-w-4xl text-lg text-black">
            By combining natural-language processing with multimodal sentiment
            detection, Reflexion maps real-time emotions onto a high-dimensional
            vector space. Each dimension captures subtle affective nuances that
            were previously invisible to traditional analytics.
          </p>

          <p className="max-w-4xl text-lg text-black">
            Early partners have used these insights to redesign onboarding
            flows, reduce churn, and even flag user frustration before a support
            ticket is filed.
          </p>
        </section>

        {/* ------------ 底部分隔線 ------------ */}
        <hr className="mx-12 mb-4 h-px border-0 bg-[#687781] sm:mx-5" />

        {/* ------------ Tags + Share ------------ */}
        <footer className="flex flex-wrap items-center justify-between gap-6 px-12 pb-12 sm:flex-col sm:items-start sm:px-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-4">
            {["AI", "Emotion Data", "Product Analytics"].map((t) => (
              <span
                key={t}
                className="rounded-md bg-[#1E3958] px-9 py-2 text-base font-bold text-white hover:bg-[#0F1F35] transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Share buttons (reuse your component) */}
          <ShareButtons title="Reflexion turns emotions into data" />
        </footer>
      </article>
    </main>
  );
}
