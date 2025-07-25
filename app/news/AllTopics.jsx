/* /AllTopics.js
   -------------------------------------------------------------- */
   "use client";
   import Link from "next/link";
   
   /* -------------------------------------------------------------- */
   /* 假資料：若之後想改成 CMS 或 API 取回，直接替換這陣列即可             */
   const TOPICS = [
     "Accessibility",
     "Arts & Culture",
     "Emotional Health",
     "Entrepreneurs",
     "Diversity & Inclusion",
     "Sustainability",
     "Student Programs",
     "Product Updates",
     "Learning & Education",
     "Small Business",
     "Public Policy",
     "Mental Wellness",
     "AI Ethics",
     "Nonprofits",
     "UX & HCI",
   ];
   
   /* -------------------------------------------------------------- */
   /* 工具：把字串轉 slug（/topics/ai-ethics 這種網址用）              */
   const slugify = (str) =>
     str
       .toLowerCase()
       .replace(/&/g, "and")
       .replace(/[^\w\s-]/g, "")
       .trim()
       .replace(/\s+/g, "-");
   
   /* -------------------------------------------------------------- */
   /* 元件                                                             */
   export default function AllTopics() {
     return (
       <section className="w-full bg-[#F5EEE7] px-5 md:px-10 xl:px-20 pb-24 flex flex-col items-center">
         {/* 內層容器，控制最大寬度 */}
         <div className="bg-orange-50 rounded-xl border border-zinc-300 p-6 lg:p-10 max-w-7xl w-full">
           {/* 標題 */}
           <h2 className="text-4xl xl:text-5xl font-semibold text-slate-700 text-center">
             All Topics
           </h2>
   
           {/* 分欄清單：手機 1 欄、平板 2 欄、桌機 3 欄 */}
           <div className="mt-16 grid gap-y-10 gap-x-24 text-2xl font-semibold text-slate-600 lg:grid-cols-3 sm:grid-cols-2">
             {TOPICS.map((topic) => (
               <Link
                 key={topic}
                 href={`/news`}
                 className="hover:text-[#707B9E] transition-colors"
               >
                 {topic}
               </Link>
             ))}
           </div>
         </div>
       </section>
     );
   }