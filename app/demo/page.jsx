// app/demo/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DemoRedirect() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://reflexion-demo-mobile-demo.vercel.app/"; // Replace with your demo URL
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg text-gray-700">Redirecting to demo...</p>
    </div>
  );
}