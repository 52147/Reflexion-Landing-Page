"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";
import LoginButton from "./LoginButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="w-full bg-[#F5EEE7] shadow-sm">
      <div className="mx-auto max-w-[1440px] px-5 py-6">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center gap-5">
            <img
              src="/reflexion-logo.png"
              alt="Reflexion"
              className="h-[107px] w-auto transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110"
            />
          </Link>

          {/* desktop nav links */}
          <div className="hidden items-center gap-6 md:flex">
            {[
              { href: "#about", label: "About" },
              { href: "#features", label: "Features" },
              { href: "#technical-status", label: "Technical Status" },
              { href: "#faq", label: "FAQ" },
              { href: "#contact", label: "Contact" },
              { href: "/news", label: "News" }, // 注意這裡的 href 應該是 /news 而不是 News
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xl font-semibold text-black transition-colors hover:text-slate-600"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* actions + hamburger */}
          <div className="flex items-center gap-5">
            {user ? (
              <>
                <span className="hidden md:block text-sm font-medium text-[#707B9E]">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="hidden md:block rounded-xl border border-stone-200 bg-red-400 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <LoginButton/>
              </>
            )}

            {/* hamburger / close icon – mobile only */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="block md:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* mobile dropdown */}
        {open && (
          <div className="mt-4 flex flex-col gap-4 md:hidden">
            {[
              { href: "#about", label: "About" },
              { href: "#features", label: "Features" },
              { href: "#technicalStatus", label: "Technical Status" },
              { href: "#faq", label: "FAQ" },
              { href: "#contact", label: "Contact" },
              {href: "/news", label: "News" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-2 py-1 text-xl font-semibold text-black transition-colors hover:bg-stone-200"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              {user ? (
                <>
                  <span className="text-sm font-medium text-[#707B9E]">
                    {user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="rounded-xl border border-stone-200 bg-red-400 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <LoginButton/>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}