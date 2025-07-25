/* PageShowcase.js ------------------------------------------------------- */
"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ---------------------------------------------------------------------- */
/* 1. 假資料 – 建議改用 API 取回 ----------------------------------------- */
const DATA = [
  {
    id: "press",
    title: "Press",
    items: [
      {
        tag: "PRESS",
        title: "Reflexion turns emotions into data",
        date: "2025-07-18",
        desc: "A new approach to understanding user emotions through Reflexion's advanced AI techniques.",
        img: "/press-reflexion-data-cover.png",
        href: "news/press/reflexion-turns-emotions-into-data",
      },
      {
        tag: "PRESS",
        title: "AI for mental health: Reflexion in action",
        date: "2025-06-12",
        desc: "Exploring how Reflexion's AI is making waves in mental wellness.",
        img: "/press-02.png",
        href: "news/press/ai-for-mental-health",
      },
      {
        tag: "PRESS",
        title: "AI Review: Trends in emotional computing",
        date: "2025-05-20",
        desc: "An overview of emotional intelligence in AI, featuring Reflexion’s contribution.",
        img: "/press-emotional-computing-cover.png",
        href: "news/press/emotional-computing-trends",
      },
    ],
  },
//   {
//     id: "update",
//     title: "Update",
//     items: [
//       {
//         tag: "UPDATE",
//         title: "Introducing the Adaptive Prompt Tree",
//         date: "2025-06-30",
//         desc: "Enhancing our AI's prompting capabilities with flexible, context-sensitive adaptation.",
//         img: "/images/update-1.jpg",
//         href: "/update/adaptive-prompt-tree",
//       },
//       {
//         tag: "UPDATE",
//         title: "New Emotion Lab feature now live",
//         date: "2025-05-10",
//         desc: "Discover and track emotional patterns with our latest interactive tool.",
//         img: "/images/update-2.jpg",
//         href: "/update/emotion-lab-live",
//       },
//       {
//         tag: "UPDATE",
//         title: "Monthly Summary AI Module released",
//         date: "2025-04-18",
//         desc: "Aggregate trends, session-level insights, and language-shift detection now available.",
//         img: "/images/update-3.jpg",
//         href: "/update/monthly-summary-module",
//       },
//     ],
//   },
  {
    id: "story",
    title: "Story",
    items: [
      {
        tag: "STORY",
        title: "How Reflexion helped me find balance",
        date: "2025-05-25",
        desc: "A personal journey of emotional reflection and regained stability.",
        img: "/story-1.png",
        href: "https://medium.com/@ainotfound404321/how-reflexion-helped-me-find-balance-c08133e603cd",
        // https://medium.com/@ainotfound404321/how-reflexion-helped-me-find-balance-c08133e603cd
        // "/story/find-balance
      },
      {
        tag: "STORY",
        title: "7 days with Reflexion: A personal journal",
        date: "2025-04-28",
        desc: "A new approach to understanding user emotions through Reflexion's advanced AI techniques.",
        img: "/story-journal-cover.png",
        href: "news/story/7-days-journal",
      },
      {
        tag: "STORY",
        title: "Students use Reflexion for exam stress",
        date: "2025-03-15",
        desc: "College students reflect on managing anxiety and staying grounded during finals week.",
        img: "/exam-stress-cover.png",
        href: "news/story/exam-stress",
      },
    ],
  },
//   {
//     id: "milestone",
//     title: "Milestone",
//     items: [
//       {
//         tag: "MILESTONE",
//         title: "10K Monthly Users",
//         date: "2025-07-18",
//         desc: "A key growth moment — now serving over 10,000 active users monthly.",
//         img: "/images/mile-1.jpg",
//         href: "/milestone/10k-users",
//       },
//       {
//         tag: "MILESTONE",
//         title: "Reflexion joins Google for Startups",
//         date: "2025-06-08",
//         desc: "Accepted into Google’s program supporting AI-led mental-health innovation.",
//         img: "/images/mile-2.jpg",
//         href: "/milestone/google-startups",
//       },
//       {
//         tag: "MILESTONE",
//         title: "2.3 M impressions in 30 days",
//         date: "2025-05-14",
//         desc: "Rapid growth in platform reach with strong engagement.",
//         img: "/images/mile-3.jpg",
//         href: "/milestone/2m-impressions",
//       },
//     ],
//   },
];

/* ---------------------------------------------------------------------- */
/* 2. 通用 Section 元件 -------------------------------------------------- */
function Section({ title, items }) {
  const rowRef = useRef(null);

  const scrollRow = (dir) => {
    const row = rowRef.current;
    if (!row) return;
    const gap = 24;
    const cardW = row.firstChild?.getBoundingClientRect().width || 0;
    row.scrollBy({
      left: dir === "next" ? cardW + gap : -(cardW + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-7xl pt-24">
      {/* 大標題 */}
      <h2 className="text-4xl font-semibold text-slate-600 xl:text-5xl">
        {title}
      </h2>

      {/* 卡片列 */}
      <div
        ref={rowRef}
        className="mt-8 flex gap-8 overflow-x-auto scroll-smooth pb-8"
      >
        {items.map((item) => (
          <Card key={item.href} {...item} />
        ))}
      </div>

      {/* 左右箭頭 – 只在桌機顯示 */}
      <button
        onClick={() => scrollRow("prev")}
        aria-label="previous"
        className="hidden xl:block absolute -left-12 top-[calc(50%+1rem)] -translate-y-1/2"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => scrollRow("next")}
        aria-label="next"
        className="hidden xl:block absolute -right-12 top-[calc(50%+1rem)] -translate-y-1/2"
      >
        <ArrowRight />
      </button>

      {/* View more 按鈕 —— ml-auto 把它推到最右邊 */}
      <button
        className="mt-16 mx-auto flex items-center gap-3 rounded-full border border-slate-400 bg-white px-8 py-3 text-2xl font-medium text-slate-700 hover:bg-slate-100 transition-colors ml-auto w-full max-w-[300px] justify-center"
      >
        View&nbsp;more
        <svg width="27" height="54" viewBox="0 0 27 54" fill="none">
          <path
            d="M22.85 28.6L10.12 41.33 6.94 38.15 18.08 27.01 6.94 15.87l3.18-3.18 12.73 12.73a2 2 0 010 3.18z"
            fill="#687781"
          />
        </svg>
      </button>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
//* 3. Card 元件 ---------------------------------------------------------- */
function Card({ tag, title, date, desc, img, href }) {
  return (
    <article className="relative w-[400px] shrink-0 rounded-2xl bg-white p-6 shadow-md transition-transform hover:shadow-lg">
      {/* Tag */}
      <span className="absolute top-6 left-6 inline-block rounded bg-sky-950 px-4 py-1 text-xs font-bold text-white">
        {tag}
      </span>

      {/* Thumb – 右上角 */}
      <div className="absolute right-6 top-6 h-36 w-36 overflow-hidden rounded-xl bg-neutral-200">
        <Image
          src={img}
          alt={title}
          fill
          sizes="144px"
          className="object-cover"
        />
      </div>

      {/* 文字 */}
      <h3 className="pr-[calc(144px+2rem)] pt-16 text-lg font-semibold leading-snug text-slate-700">
        {title}
      </h3>
      <time className="mt-6 block text-sm text-slate-600">
        {new Date(date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <p className="mt-4 text-sm leading-relaxed text-slate-700 mb-12">
        {desc}
      </p>

      {/* Read More 小鈕 – 右下角 */}
      <Link
        href={href}
        className="absolute bottom-6 right-6 inline-flex items-center gap-1 rounded-full bg-[#707B9E] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5f6989] z-10"
      >
        Read&nbsp;More
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M3 2l6 5.5L3 13" stroke="currentColor" strokeWidth="2" />
        </svg>
      </Link>

      {/* 若想整卡可點，可把下列 Link 保留，但要讓 pointer-events 失效或 z-index 更低 */}
      {/* <Link href={href} className="absolute inset-0 z-0" /> */}
    </article>
  );
}

/* ---------------------------------------------------------------------- */
/* 4. 箭頭 SVG ----------------------------------------------------------- */
const ArrowLeft = () => (
  <svg width="28" height="55" viewBox="0 0 28 55" fill="none">
    <path
      d="M4.44 25.66l12.58-12.87 3.22 3.15L9.23 27.2l11.27 11.01-3.14 3.22L4.48 28.84a2 2 0 01-.04-2.82z"
      fill="#687781"
    />
  </svg>
);
const ArrowRight = () => (
  <svg width="27" height="54" viewBox="0 0 27 54" fill="none">
    <path
      d="M22.85 28.6L10.12 41.33 6.94 38.15 18.08 27.01 6.94 15.87l3.18-3.18 12.73 12.73a2 2 0 010 3.18z"
      fill="#687781"
    />
  </svg>
);

/* ---------------------------------------------------------------------- */
/* 5. 頁面元件 ----------------------------------------------------------- */
export default function PageShowcase() {
  return (
    <main className="flex flex-col items-center px-8 pb-24">
      {DATA.map((section) => (
        <Section key={section.id} title={section.title} items={section.items} />
      ))}
    </main>
  );
}
