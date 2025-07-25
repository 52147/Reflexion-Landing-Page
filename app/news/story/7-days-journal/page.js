/* app/story/7-days-journal/page.js ------------------------------------ */
"use client";

import Image from "next/image";
import Link from "next/link";
import ShareButtons from "../../../components/ShareButtons";

/* ─── little SVGs (reuse / tweak as you wish) ────────────────────────── */
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

/* ─── Article page ───────────────────────────────────────────────────── */
export default function SevenDayJournal() {
  return (
    <main className="min-h-screen bg-[#F5EEE7]">
      <article
        className="
        relative mx-auto max-w-5xl rounded-lg border border-[#DEDBD9] bg-white shadow-lg
        p-0 sm:p-5 md:p-12
      "
      >
        {/* ── Breadcrumb nav ─────────────────── */}
        <nav
          aria-label="breadcrumb"
          className="flex flex-wrap items-center gap-4 px-12 md:gap-6 sm:px-5"
        >
          {/* Home */}
          <Link
            href="/"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#707B9E]  "
          >
            <HomeIcon aria-label="Home" />
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

        {/* ── Title ──────────────────────────── */}
        <h1
          className="
          mt-4 max-w-4xl px-12 text-3xl md:text-[64px] lg:text-5xl
          font-extrabold leading-tight text-[#7F85AA] hover:text-[#707B9E] sm:px-5
        "
        >
          7&nbsp;Days with Reflexion: A Personal&nbsp;Journal
        </h1>

        {/* ── Date & Dek ─────────────────────── */}
        <section className="mt-10 flex flex-col gap-6 px-12 md:flex-row md:items-start sm:px-5">
          <div className="flex items-center gap-6">
            <time
              dateTime="2025-04-27"
              className="block w-28 shrink-0 text-lg font-bold text-[#525252]"
            >
              2025-04-27
            </time>
            <span className="hidden h-24 w-px bg-[#525252] md:block" />
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-[#525252]">
            A new approach to understanding user emotions through Reflexion’s
            advanced&nbsp;AI techniques.
          </p>
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

        {/* ── Cover image ─────────────────────── */}
        <div className="relative mx-12 mt-10 h-[580px] rounded-2xl bg-[#D9D9D9] sm:mx-5 sm:h-[300px]">
          <Image
            src="/story-journal-cover.png" /* place the PNG here */
            alt="Illustration of a 7-day personal journal using Reflexion"
            fill
            className="object-contain"
            sizes="(min-width:640px) 100vw, 640px"
          />
        </div>

        {/* ── Body : 7-day journal ─────────────────────────────── */}
        <section className="space-y-14 px-12 py-10 sm:px-5 text-[#525252]">
          {/* intro blurb */}
          <p className="max-w-4xl text-lg">
            Over one intense exam week I committed to a nightly Reflexion
            session. What follows are the unfiltered take-aways, day by day.
          </p>

          {/* ------- Day 1 ------- */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3958]">
              Day 1 — Naming the Noise
            </h2>
            <p className="max-w-4xl text-lg">
              Opening Reflexion for the first time felt like confronting a
              crowded room in my head. The emotion wheel revealed a jagged
              cluster of
              <strong className="font-semibold text-[#7F85AA]">
                {" "}
                anxiety&nbsp;↔&nbsp;anticipation
              </strong>
              . Simply tagging those feelings reduced the swirl.
            </p>
            <blockquote className="rounded-lg bg-[#EFEAF7] p-6 text-base font-semibold text-[#525C79]">
              “Writing ‘I am terrified of blanking out’ sounded dramatic but
              strangely freeing.”
            </blockquote>
          </div>

          {/* ------- Day 2 ------- */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3958]">
              Day 2 — Breathing Graphs
            </h2>
            <p className="max-w-4xl text-lg">
              Reflexion’s guided breath timer synced with a real-time heart-rate
              chart (I connected my watch). I watched BPM drop from 92 → 68 in
              four minutes — visible proof that calm is trainable.
            </p>
          </div>

          {/* ------- Day 3 ------- */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3958]">
              Day 3 — The ‘Why?’ Ladder
            </h2>
            <p className="max-w-4xl text-lg">
              A five-level “why” prompt dug past <em>“I need an A”</em> to a
              deeper fear of letting my parents down. That sting turned
              tomorrow’s study plan from <em>hours logged</em> to{" "}
              <em>curiosity regained</em>.
            </p>
          </div>

          {/* ------- Day 4 ------- */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3958]">
              Day 4 — Pattern Alert
            </h2>
            <p className="max-w-4xl text-lg">
              Reflexion flagged a repeating trigger: I spiral after late-night
              TikTok breaks. Tiny habit tweak: phone stays outside the bedroom.
            </p>
            <blockquote className="rounded-lg bg-[#EFEAF7] p-6 text-base font-semibold text-[#525C79]">
              “One push notification did what three self-help books couldn’t.”
            </blockquote>
          </div>

          {/* ------- Day 5 ------- */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3958]">
              Day 5 — Mini Victories
            </h2>
            <p className="max-w-4xl text-lg">
              I logged a{" "}
              <span className="font-semibold text-emerald-600">
                +2 mood delta
              </span>{" "}
              after finishing my lab outline. Reflexion celebrated with a
              confetti animation — cheesy but undeniably uplifting.
            </p>
          </div>

          {/* ------- Day 6 ------- */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3958]">
              Day 6 — Sharing the Graph
            </h2>
            <p className="max-w-4xl text-lg">
              I exported my week-to-date “emotion timeline” and sent it to a
              study buddy. We compared spikes; turns out we crash at the same
              time every afternoon. Tomorrow we’re co-working at 3 pm to ride
              the slump together.
            </p>
          </div>

          {/* ------- Day 7 ------- */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3958]">
              Day 7 — Looking Back
            </h2>
            <p className="max-w-4xl text-lg">
              My final check-in plotted a steady climb toward{" "}
              <strong>calm</strong>. Exams still loom, but the fear fog is
              thinner; I have data-driven evidence that reflection beats
              rumination.
            </p>
          </div>

          {/* closing thought */}
          <p className="max-w-4xl text-lg">
            Seven days of structured self-talk didn’t magically ace my tests —
            but it did give me the mental whitespace to try. That, I’m learning,
            is the real grade that matters.
          </p>
        </section>

        {/* ── Divider ─────────────────────────── */}
        <hr className="mx-12 h-px border-0 bg-[#687781] sm:mx-5 mb-4" />

        {/* ── Tags & share ────────────────────── */}
        <footer className="flex flex-wrap items-center justify-between gap-6 px-12 pb-12 sm:flex-col sm:items-start sm:px-5">
          <div className="flex flex-wrap gap-4">
            {["Personal Stories", "Emotional Health", "AI Journaling"].map(
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
          <ShareButtons title="7 Days with Reflexion: A Personal Journal" />
        </footer>
      </article>
    </main>
  );
}
