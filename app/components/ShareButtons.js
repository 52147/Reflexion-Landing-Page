// components/ShareButtons.js
"use client"; // needed because we touch window / clipboard
import { usePathname } from "next/navigation"; // ↖ app router helper
import { useCallback } from "react";
import { LinkedInIcon, FacebookIcon, TwitterIcon, CopyIcon } from "./Icons"; // whatever icon set you use

export default function ShareButtons({ title }) {
  /* ---------------------------------------------------------
     1. Build the absolute page URL (Works on both server & client)
  --------------------------------------------------------- */
  const pathname = usePathname();
  // During SSR `window` is undefined; patch with origin later on client.
  const pageURL =
    typeof window === "undefined"
      ? pathname // temporary
      : window.location.href; // final on client

  /* ---------------------------------------------------------
     2. Share handler
  --------------------------------------------------------- */
  const share = useCallback(
    (platform) => {
      const url = encodeURIComponent(pageURL);
      const text = encodeURIComponent(title);

      let shareURL = "";

      switch (platform) {
        case "linkedin":
          shareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
          break;
        case "facebook":
          shareURL = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case "twitter":
          shareURL = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
          break;
        case "copy":
          navigator.clipboard.writeText(pageURL);
          alert("Link copied 👍");
          return; // don’t open a window
        default:
          return;
      }

      window.open(
        shareURL,
        "_blank",
        "noopener,noreferrer,width=600,height=600"
      );
    },
    [pageURL, title]
  );

  /* ---------------------------------------------------------
     3. Mark-up (tailwind classes match your design)
  --------------------------------------------------------- */
  return (
    <div className="flex items-center gap-6 self-end">
      <span className="text-lg font-bold text-[#525252]">Share:</span>
      <div className="flex gap-4">
        <LinkedInIcon
          data-plat="linkedin"
          onClick={() => share("linkedin")}
          className="h-7 w-7 cursor-pointer hover:opacity-70 text-[#707B9E]"
        />
        <FacebookIcon
          className="h-7 w-7 cursor-pointer hover:opacity-70 text-[#707B9E]"
          onClick={() => share("facebook")}
        />
        <TwitterIcon
          className="h-7 w-7 cursor-pointer hover:opacity-70 text-[#707B9E]"
          onClick={() => share("twitter")}
        />
        <CopyIcon
          className="h-7 w-7 cursor-pointer hover:opacity-70 text-[#707B9E]"
          onClick={() => share("copy")}
        />
        {/* add more icons / platforms the same way */}
      </div>
    </div>
  );
}
