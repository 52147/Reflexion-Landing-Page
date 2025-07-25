/* app/press/ai-for-mental-health/page.js ------------------------------ */
"use client";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "../../../components/ShareButtons";
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

export default function AiMentalHealthArticle() {
  return (
    <main className="min-h-screen bg-[#F5EEE7]">
      <article
        className="relative mx-auto max-w-5xl rounded-lg border border-[#DEDBD9] bg-white shadow-lg
                          p-0 sm:p-5 md:p-12"
      >
        {/* ---------- breadcrumb nav ---------- */}
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

        {/* ---------- title ---------- */}
        <h1
          className="mt-4 max-w-4xl px-12 text-3xl md:text-[64px] lg:text-5xl
                       font-extrabold leading-tight text-[#7F85AA] hover:text-[#707B9E] sm:px-5"
        >
          AI for mental health: Reflexion in action
        </h1>

        {/* ---------- date + intro ---------- */}
        <section className="mt-10 flex flex-col gap-6 px-12 md:flex-row md:items-start sm:px-5">
          <div className="flex items-center gap-6">
            <time
              dateTime="2025-06-11"
              className="block w-28 shrink-0 text-lg font-bold text-[#525252]"
            >
              2025-06-11
            </time>
            <span className="hidden h-24 w-px bg-[#525252] md:block" />
          </div>

          <p className="max-w-3xl text-lg leading-relaxed text-[#525252]">
            Exploring how Reflexion&rsquo;s AI is making waves in mental
            wellness.
          </p>
        </section>

        {/* ---------- author ---------- */}
        <section className="mt-10 flex flex-col gap-6 px-12 md:flex-row md:items-start sm:px-5">
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

        {/* ---------- cover image ---------- */}
        <div className="relative mx-12 mt-10 h-[580px] rounded-2xl bg-[#D9D9D9] sm:mx-5 sm:h-[300px]">
          <Image
            src="/press-02.png"
            alt="Illustration: AI for mental health, Reflexion in action"
            fill
            className="object-contain"
            sizes="(min-width: 640px) 100vw, 640px"
          />
        </div>

        {/* ---------- body ---------- */}
        <section className="space-y-10 px-12 py-10 sm:px-5 text-[#525252]">
          {/* 01 */}
          <h2 className="text-3xl md:text-4xl font-bold">
            Transforming Well-Being With AI
          </h2>
          <p className="max-w-4xl text-lg">
            Reflexion’s latest study—conducted with 4 200 university students
            over a three-week exam block—shows a 32 % reduction in reported
            stress levels after nightly 10-minute Reflection Sessions. By
            combining affective-computing models with cognitive re-framing
            prompts, the platform guides users from raw emotion to actionable
            insight in under five minutes.
          </p>

          {/* 02 */}
          <blockquote className="rounded-lg bg-[#EFEAF7] p-10 text-lg font-bold text-[#525C79]">
            “I opened Reflexion between back-to-back finals and felt my heart
            rate slow almost immediately. It’s like a guided conversation with
            myself.” — Jordyn K., senior at UCLA
          </blockquote>

          {/* 03 */}
          <h3 className="text-2xl md:text-3xl font-bold">
            Real-Time Emotional Insights
          </h3>
          <p className="max-w-4xl text-lg">
            At the core of Reflexion is an on-device transformer that classifies
            sentiments, detects cognitive distortions, and proposes
            micro-prompts— all&nbsp;within 120 ms. Because the processing stays
            on the phone, users keep full control of their data while still
            benefiting from powerful analytics.
          </p>

          <ul className="list-disc space-y-2 pl-6 text-lg">
            <li>
              <strong>Sentiment arcs&nbsp;</strong>visualize mood shifts across
              a day.
            </li>
            <li>
              <strong>Thought traps&nbsp;</strong>surface patterns like
              catastrophizing or black-and-white thinking.
            </li>
            <li>
              <strong>Synthesis snippets&nbsp;</strong>generate a one-sentence
              takeaway for quick reflection.
            </li>
          </ul>

          {/* 04 */}
          <h3 className="text-2xl md:text-3xl font-bold">
            Clinically-Aligned Prompts
          </h3>
          <p className="max-w-4xl text-lg">
            Reflexion’s prompt library is co-authored with licensed therapists
            and maps to evidence-based modalities such as CBT and ACT. Each
            suggestion is graded for readability (<em>Flesch score ≥ 62 </em>)
            to ensure accessibility for users as young as 15.
          </p>

          <blockquote className="rounded-lg bg-[#EFEAF7] p-10 text-lg font-bold text-[#525C79]">
            “The AI’s re-framing prompt mirrored the advice I give my patients —
            impressive accuracy for a consumer app.” — Dr. Anika R., clinical
            psychologist
          </blockquote>

          {/* 05 */}
          <h3 className="text-2xl md:text-3xl font-bold">Looking Ahead</h3>
          <p className="max-w-4xl text-lg">
            Upcoming releases will add heart-rate variability integration from
            popular wearables, enabling Reflexion to time check-ins precisely
            when physiology indicates rising stress. The team is also piloting a
            <em>&nbsp;“Peer-Share”&nbsp;</em> mode, letting friends send
            supportive prompts—a social layer shown to boost adherence by 18 %.
          </p>
        </section>

        {/* ---------- divider ---------- */}
        <hr className="mx-12 h-px border-0 bg-[#687781] sm:mx-5 mb-4" />

        {/* ---------- tags & share ---------- */}
        <footer className="flex flex-wrap items-center justify-between gap-6 px-12 pb-12 sm:flex-col sm:items-start sm:px-5">
          <div className="flex flex-wrap gap-4">
            {["Mental Wellness", "AI Applications", "Healthcare"].map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[#1E3958] px-9 py-2 text-base font-bold text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <ShareButtons title="AI for mental health: Reflexion in action" />
        </footer>
      </article>
    </main>
  );
}
