"use client";
import React from "react";
import Image from "next/image";

/* 共用卡片元件 --------------------------------------------------- */
function StatusCard({ iconSrc, title, py = "py-[86px]" }) {
  return (
    <div
    className={`flex flex-col items-center gap-12 rounded-[20px] border border-white px-14 ${py} lg:flex-row`}    >
      <img src={iconSrc} alt="" width={90} height={90} />
      <h3 className="text-2xl md:text-[32px] font-semibold text-white leading-snug">
        {title}
      </h3>
    </div>
  );
}

/* Technical Status 區塊 ------------------------------------------ */
export default function TechnicalStatusSection() {
  return (
    <section id="technical-status" className="flex flex-col items-center bg-[#707B9E] px-20 py-32 md:px-6 md:py-24">
      {/* 標題 */}
      <h2 className="text-4xl md:text-[48px] font-semibold text-white text-center">
        Technical Status
      </h2>

      {/* 副標 */}
      <p className="mt-14 md:mt-10 max-w-2xl text-center text-base md:text-lg font-medium text-white">
        Current Version: Mobile-first demo prototype (React-based UI + simulated
        API flow) <br /> Upcoming:
      </p>

      {/* 4 卡片：2×2 網格 */}
      <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col lg:flex-row gap-10 w-full max-w-[1220px] lg:grid lg:grid-cols-2">
        {" "}
        <StatusCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/02424b1c191c6a65c151e0884393e435febb8786"
          title="Auth system + daily usage control"
        />
        <StatusCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/045ece0efacd3cdeb11b1cd1e5440769cd636700"
          title="Backend API integration for real-time emotional insight"
        />
        <StatusCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/822993030e1fdafa87202960af2d3dbce0c5d91e"
          title="Partnership pilots underway (Taiwan NGO)"
        />
        <StatusCard
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/177c0fd45290bee4bc4fa36ef0ed99bbae6d100e"
          title="Automated PDF summary generation"
          py="py-[105px]" /* 這張原設計較高，補一下 padding */
        />
      </div>
    </section>
  );
}
