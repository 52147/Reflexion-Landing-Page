"use client";
/* HeroPressGroup.js ------------------------------------------------------- */
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ➜  NEW: Swiper --------------------------------------------------------- */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* dummy content – swap with real data or props --------------------------- */
const HERO = {
  tag: "PRESS",
  title: "Reflexion turns emotions into data",
  date: "2025-07-18",
  excerpt:
    "A new approach to understanding user emotions through Reflexion’s advanced AI techniques.",
  image: "/press-reflexion-data-cover.png",
  href: "news/press/reflexion-turns-emotions-into-data",
};

const PRESS_CARDS = [
  {
    tag: "PRESS",
    title: "Reflexion turns emotions into data",
    date: "2025-07-18",
    image: "/press-reflexion-data-cover.png",
    href: "news/press/reflexion-turns-emotions-into-data",
  },
  {
    tag: "PRESS",
    title: "AI for mental health: Reflexion in action",
    date: "2025-06-12",
    image: "/press-02.png",
    href: "news/press/ai-for-mental-health",
  },
  {
    tag: "PRESS",
    title: "AI Review: Trends in emotional computing",
    date: "2025-05-20",
    image: "/press-emotional-computing-cover.png",
    href: "news/press/emotional-computing-trends",
  },
  {
    tag: "STORY",
    title: "7 days with Reflexion: A personal journal",
    date: "2025-04-28",
    image: "/story-journal-cover.png",
    href: "news/story/7-days-journal",
  },
];

/* helpers ---------------------------------------------------------------- */
const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/* card component --------------------------------------------------------- */
function MiniCard({ item }) {
  return (
    <article className="relative flex flex-col shrink-0 w-[365px] rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-[230px]">
      <span className="absolute top-7 left-6 inline-block rounded bg-sky-950 px-4 py-1 text-xs font-bold text-white">
        {item.tag}
      </span>

      <div className="absolute top-8 right-6 h-36 w-36 overflow-hidden rounded-xl bg-neutral-200">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="144px"
          className="object-cover"
        />
      </div>

      <div className="p-6 pt-20 pr-[calc(144px+2rem)]">
        <h3 className="text-lg font-semibold text-slate-700 leading-snug">
          {item.title}
        </h3>
        <time className="mt-6 block text-sm text-slate-600">
          {formatDate(item.date)}
        </time>
      </div>

      <Link href={item.href} className="absolute inset-0" />
    </article>
  );
}

/* main component --------------------------------------------------------- */
export default function HeroPressGroup() {
  /* Reference for custom navigation buttons ------------------------------ */
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative mx-auto max-w-7xl bg-orange-50 rounded-xl border border-zinc-300 p-6 lg:p-10">
      <h1 className="text-6xl font-bold text-[#A2A7C2] max-md:text-4xl max-md:max-w-full hover:text-[#707B9E] mb-6">
        Latest News &amp; Updates
      </h1>
      <p className="text-lg text-slate-600 mb-12">
        Press coverage, product updates, and community stories.
      </p>
      {/* hero ---------------------------------------------------------------- */}
      <div className="relative flex flex-col lg:flex-row bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* hero image */}
        <div className="relative h-60 lg:h-auto lg:w-[476px] shrink-0">
          <Image
            src={HERO.image}
            alt={HERO.title}
            fill
            sizes="(max-width: 1024px) 100vw, 476px"
            className="object-cover"
            priority
          />
        </div>

        {/* hero copy */}
        <div className="flex flex-col gap-6 p-8 lg:p-12 lg:pl-16">
          <span className="inline-block w-max rounded bg-sky-950 px-6 py-1 text-sm font-bold text-white">
            {HERO.tag}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 max-w-2xl">
            {HERO.title}
          </h1>

          <time className="text-base lg:text-lg text-slate-600">
            {formatDate(HERO.date)}
          </time>

          <p className="max-w-xl text-lg text-slate-700">{HERO.excerpt}</p>

          <Link
            href={HERO.href}
            className="mt-auto inline-flex items-center gap-2 self-end rounded-lg border border-slate-200 bg-[#707B9E] px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Read more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M5.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06L8.44 8 5.22 4.78a.75.75 0 010-1.06z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* press cards carousel ---------------------------------------------- */}
      <div className="relative mt-20">
        {/* custom arrows (desktop) */}
        <button
          aria-label="previous"
          ref={prevRef}
          className="arrow-left absolute -left-10 top-1/2 -translate-y-1/2 hidden xl:block z-10"
        >
          <svg width="28" height="55" viewBox="0 0 28 55" fill="none">
            <path
              d="M4.44 25.66l12.58-12.87 3.22 3.15L9.23 27.2l11.27 11.01-3.14 3.22L4.48 28.84a2 2 0 01-.04-2.82z"
              fill="#687781"
            />
          </svg>
        </button>

        <button
          aria-label="next"
          ref={nextRef}
          className="arrow-right absolute -right-10 top-1/2 -translate-y-1/2 hidden xl:block z-10"
        >
          <svg width="27" height="54" viewBox="0 0 27 54" fill="none">
            <path
              d="M22.85 28.6L10.12 41.33 6.94 38.15 18.08 27.01 6.94 15.87l3.18-3.18 12.73 12.73a2 2 0 010 3.18z"
              fill="#687781"
            />
          </svg>
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={24}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            // to make custom refs work
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="overflow-visible"
        >
          {PRESS_CARDS.map((c) => (
            <SwiperSlide key={c.href} className="!w-auto mb-8">
              <MiniCard item={c}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
