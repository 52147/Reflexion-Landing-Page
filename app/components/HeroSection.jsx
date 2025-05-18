"use client";

import React from "react";
import useFirebaseLogin from "../hooks/useFirebaseLogin";

/**
 * HeroSection
 *
 * Extracted from <Home/> so it can be re-used and swapped in easily.
 * No layout / style changes were made – only wrapped into its own
 * component and given explicit section IDs so the nav links continue
 * to work.
 */
export default function HeroSection() {

  const loginWithGoogle = useFirebaseLogin();

  return (
  <header
    id="hero"
    className="flex flex-col justify-center items-center px-16 py-6 w-full bg-[#F5EEE7] max-md:px-5 max-md:max-w-full"
  >
    <div className="px-11 py-24 w-full bg-orange-50 rounded-xl border border-zinc-300 max-w-[1240px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left – copy */}
        <div className="w-6/12 max-md:w-full">
          <div className="mt-11 w-full max-md:mt-10 max-md:max-w-full text-black">
            <h1 className="text-6xl font-bold text-[#A2A7C2] max-md:text-4xl max-md:max-w-full hover:text-[#707B9E]">
              Reflexion
            </h1>
            <div
              className="mt-3.5 w-full min-h-[100px]
 max-md:max-w-full"
            >
              <p className="text-2xl font-bold max-md:max-w-full">
                Reflect. Understand. Grow.
              </p>
              <p className="gap-2.5 font-semibold py-2.5 w-full text-xl max-md:max-w-full mt-2">
                A cognitive insight tool designed to turn emotional struggles
                into actionable self-awareness.
              </p>
              <p className="gap-2.5 font-semibold py-2.5 w-full text-xl max-md:max-w-full">
                Built for individuals seeking mental clarity without access to
                therapy.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-20 w-full max-w-[461px] font-bold text-white flex flex-col md:flex-row gap-4 md:gap-5 max-md:mt-10">
            <button
              className="flex-1 px-5 py-4 text-2xl bg-[#707B9E] rounded-xl border hover:bg-[#5f6988] transition-colors"
              type="button"
            >
              <a
                href="/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the Demo
              </a>
            </button>

            <button
            onClick={loginWithGoogle}
              className="flex-1 px-5 py-4 text-base font-bold bg-[#707B9E] rounded-xl border hover:bg-[#5f6988] transition-colors"
              type="button"
            >
              Join as Prototype User
            </button>
          </div>
        </div>

        {/* Right – hero image */}
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="/phone-1.png"
            alt="Reflexion app interface"
            className="object-contain w-full rounded-3xl aspect-[1.3] bg-[rgba(161,141,214,0.1)] max-md:mt-10 max-md:max-w-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>
    </div>
  </header>
);}

