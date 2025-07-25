/* app/press/emotional-computing-trends/page.js ------------------------ */
"use client";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "../../../components/ShareButtons"; // adjust path if needed

/* -------------------------------------------------------------------- */
/*  SVG icons (compact)                                                 */
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

/* -------------------------------------------------------------------- */
/*  Article page                                                        */
export default function EmotionalComputingArticle() {
  return (
    <main className="min-h-screen bg-[#F5EEE7] py-0">
      <article
        className="
          relative mx-auto max-w-5xl rounded-lg border border-[#DEDBD9] bg-white shadow-lg
          p-0           /* phones */
          sm:p-5        /* ≥ 640 px */
          md:p-12       /* ≥ 768 px */
        "
      >
        {/* --------- Breadcrumb --------- */}
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
            href="/press"
            className="text-xl font-semibold text-[#707B9E] hover:text-[#979fbc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#707B9E]"
          >
            Press
          </Link>
        </nav>

        {/* --------- Title --------- */}
        <h1
          className="
            mt-4 max-w-4xl px-12
            text-3xl md:text-[64px] lg:text-5xl
            font-extrabold leading-tight text-[#7F85AA] hover:text-[#707B9E]
            sm:px-5
          "
        >
          AI Review: Trends in emotional computing
        </h1>

        {/* --------- Date & intro --------- */}
        <section className="mt-10 flex flex-col gap-6 px-12 md:flex-row md:items-start md:gap-6 sm:px-5">
          <div className="flex items-center gap-6">
            <time
              dateTime="2025-05-19"
              className="block w-28 shrink-0 text-lg font-bold text-[#525252]"
            >
              2025-05-19
            </time>
            <span className="hidden h-24 w-px bg-[#525252] md:block" />
          </div>
          <div className="flex items-center h-full">
            <p className="max-w-3xl text-lg leading-relaxed text-[#525252]">
              An overview of emotional intelligence in AI, featuring Reflexion’s
              contribution.
            </p>
          </div>
        </section>

        {/* --------- Author --------- */}
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

        {/* --------- Cover --------- */}
        <div className="relative mx-12 mt-10 h-[580px] rounded-2xl bg-[#D9D9D9] sm:mx-5 sm:h-[300px]">
          <Image
            src="/press-emotional-computing-cover.png"
            alt="Illustration — Emotional-computing trends"
            fill
            className="object-contain"
            sizes="(min-width:640px) 100vw, 640px"
          />
        </div>

        {/* --------- Body --------- */}
        <section className="space-y-10 px-12 py-10 sm:px-5 text-[#525252]">
          {/* 1 ─ Overview */}
          <h2 className="text-3xl md:text-4xl font-bold">
            Transforming wellbeing with AI
          </h2>

          <p className="max-w-4xl text-lg">
            Emotional-computing systems have progressed from sentiment
            classification to real-time affective coaching. In our annual review
            we analysed <strong>120+ peer-reviewed papers</strong>, 30
            commercial products, and Reflexion’s own anonymised telemetry to
            identify the most consequential shifts.
          </p>

          {/* 2 ─ Trend list */}
          <h3 className="text-2xl md:text-3xl font-bold">
            Five trends to watch in 2025
          </h3>
          <ul className="list-disc pl-6 space-y-4 max-w-4xl text-lg">
            <li>
              <strong>Multimodal sensing → unified embeddings.</strong> Audio,
              text, biometrics, and video streams are collapsing into single
              latent spaces, boosting context accuracy by up to&nbsp;37 %.
            </li>
            <li>
              <strong>Edge privacy models.</strong> Differentially-private
              on-device inference is becoming table-stakes for consumer
              wellbeing apps.
            </li>
            <li>
              <strong>Emotion-conditioned LLM prompting.</strong> GPT-class
              models now adapt their tone and reasoning paths based on user
              affect, reducing perceived “robotic” responses by&nbsp;42 %.
            </li>
            <li>
              <strong>Therapeutic alliance metrics.</strong> Start-ups are
              moving beyond raw sentiment to track trust, openness, and
              self-efficacy over time.
            </li>
            <li>
              <strong>Regulatory sandboxes.</strong> The EU AI Act and U.S.
              SAMHSA pilots are creating opt-in frameworks for clinical-grade
              evaluations of emotional AI.
            </li>
          </ul>

          {/* 3 ─ Reflexion’s contribution */}
          <h3 className="text-2xl md:text-3xl font-bold">
            Where Reflexion fits in
          </h3>
          <p className="max-w-4xl text-lg">
            Reflexion contributes the <em>Adaptive Prompt Tree</em> (APT), an
            open-sourced decision graph that tailors cognitive-behavioural
            prompts to the user’s current arousal and valence. Early results
            show a<strong> +18 % uplift</strong> in reflection depth compared
            with static journaling apps.
          </p>

          {/* 4 ─ Quote */}
          <blockquote className="rounded-lg bg-[#EFEAF7] p-10 text-lg font-bold text-[#525C79]">
            “Emotional AI will feel less like mood tracking and more like a
            personalised coach. Reflexion’s APT is a decisive step in that
            direction.” — Dr.&nbsp;Meera Shaw, Stanford HCI Lab
          </blockquote>

          {/* 5 ─ Outlook */}
          <h3 className="text-2xl md:text-3xl font-bold">Looking ahead</h3>
          <p className="max-w-4xl text-lg">
            In the next release cycle we plan to open our{" "}
            <strong>Affect Bench</strong>
            dataset to academic partners and extend APT to support multi-turn
            voice conversations. If you’re interested in collaborating, reach
            out at&nbsp;
            <a
              href="mailto:research@reflexion.ai"
              className="underline hover:text-[#707B9E]"
            >
              research@reflexion.ai
            </a>
            .
          </p>
        </section>

        {/* --------- Divider --------- */}
        <hr className="mx-12 h-px border-0 bg-[#687781] sm:mx-5 mb-4" />

        {/* --------- Tags & Share --------- */}
        <footer className="flex flex-wrap items-center justify-between gap-6 px-12 pb-12 sm:flex-col sm:items-start sm:px-5">
          <div className="flex flex-wrap gap-4">
            {["Press", "Emotional Computing", "AI Review"].map((t) => (
              <span
                key={t}
                className="rounded-md bg-[#1E3958] px-9 py-2 text-base font-bold text-white hover:bg-[#0F1F35] transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <ShareButtons title="AI Review: Trends in emotional computing" />
        </footer>
      </article>
    </main>
  );
}
