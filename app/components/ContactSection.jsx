import React from "react";

/**
 * ContactSection
 *
 * Builder.io exported markup wrapped as a React component.
 * 改動：
 * – 兩張卡片在大型螢幕 (lg) 固定寬度 588px 並置中
 * – 其餘排版完全維持原樣
 */
const ContactSection = () => (
<div className="w-full min-h-[455px] bg-[#F5EEE7] flex justify-center items-center pt-[85px] pb-[85px] px-12 sm:px-8 md:px-[60px] lg:px-[122px]">    {/* wrapper */}
    <div className="flex flex-col lg:flex-row justify-center gap-[20px] w-full">
      {/* newsletter card */}
      <div className="w-full lg:w-[588px] rounded-[20px] bg-[linear-gradient(100deg,#FFE0EA_2.9%,#B6C2FF_100%,#B1B9CF_100%)] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-[40px] flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center text-center lg:items-start lg:text-left gap-[24px] mb-[37px] lg:h-[80px]">
          {" "}
          {/* mail icon */}
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[55px] h-[55px]"
          >
            <path
              d="M50.9002 14.2337C50.9002 11.7129 48.8377 9.65039 46.3169 9.65039H9.65023C7.12939 9.65039 5.06689 11.7129 5.06689 14.2337V41.7337C5.06689 44.2546 7.12939 46.3171 9.65023 46.3171H46.3169C48.8377 46.3171 50.9002 44.2546 50.9002 41.7337V14.2337ZM46.3169 14.2337L27.9836 25.6921L9.65023 14.2337H46.3169ZM46.3169 41.7337H9.65023V18.8171L27.9836 30.2754L46.3169 18.8171V41.7337Z"
              fill="white"
            />
          </svg>
          <div className="text-white font-bold text-[20px] sm:text-[24px] md:text-[28px] text-center">
            Sign up the newsletter to get latest update
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="flex w-[166px] h-[42px] p-[10px] justify-center items-center rounded-[10px] border border-[#F1ECE7] bg-white transition-colors duration-200 hover:bg-[#e4e4e4] active:bg-[#d6d6d6] focus:outline-none"
            type="button"
          >
            <span className="text-[#707B9E] font-inter text-[20px] font-medium">
              Subscribe
            </span>
          </button>
        </div>
      </div>

      {/* community card */}
      <div className="w-full lg:w-[588px] rounded-[20px] bg-[linear-gradient(99deg,#FFC481_11.11%,#A0FFEF_100%,#DEF0C6_100%)] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-[40px] flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center text-center lg:items-start lg:text-left gap-[24px] mb-[37px]">
          {" "}
          <svg
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[55px] h-[55px]"
          >
            <path
              d="M44.1606 12.2149C41.1127 10.7941 37.8127 9.76283 34.3752 9.16699C34.3147 9.16785 34.2571 9.19256 34.2148 9.23574C33.8023 9.99199 33.321 10.9774 33.0002 11.7337C29.3541 11.184 25.6463 11.184 22.0002 11.7337C21.6794 10.9545 21.1981 9.99199 20.7627 9.23574C20.7398 9.18991 20.671 9.16699 20.6023 9.16699C17.1648 9.76283 13.8877 10.7941 10.8169 12.2149C10.7939 12.2149 10.771 12.2378 10.7481 12.2607C4.51477 21.5878 2.79602 30.6628 3.64394 39.6462C3.64394 39.692 3.66685 39.7378 3.71269 39.7607C7.83769 42.7857 11.8023 44.6191 15.721 45.8337C15.7898 45.8566 15.8585 45.8337 15.8814 45.7878C16.7981 44.5274 17.6231 43.1982 18.3335 41.8003C18.3794 41.7087 18.3335 41.617 18.2419 41.5941C16.9356 41.0899 15.6981 40.4941 14.4835 39.8066C14.3919 39.7607 14.3919 39.6232 14.4606 39.5545C14.7127 39.3712 14.9648 39.1649 15.2169 38.9816C15.2627 38.9357 15.3314 38.9357 15.3773 38.9587C23.2606 42.5566 31.7627 42.5566 39.5544 38.9587C39.6002 38.9357 39.6689 38.9357 39.7148 38.9816C39.9669 39.1878 40.2189 39.3712 40.471 39.5774C40.5627 39.6462 40.5627 39.7837 40.4481 39.8295C39.2564 40.5399 37.996 41.1128 36.6898 41.617C36.5981 41.6399 36.5752 41.7545 36.5981 41.8232C37.3314 43.2212 38.1564 44.5503 39.0502 45.8107C39.1189 45.8337 39.1877 45.8566 39.2564 45.8337C43.1981 44.6191 47.1627 42.7857 51.2877 39.7607C51.3335 39.7378 51.3564 39.692 51.3564 39.6462C52.3648 29.2649 49.6835 20.2587 44.2523 12.2607C44.2294 12.2378 44.2064 12.2149 44.1606 12.2149ZM19.5252 34.1691C17.1648 34.1691 15.1939 31.992 15.1939 29.3107C15.1939 26.6295 17.1189 24.4524 19.5252 24.4524C21.9544 24.4524 23.8794 26.6524 23.8564 29.3107C23.8564 31.992 21.9314 34.1691 19.5252 34.1691ZM35.4981 34.1691C33.1377 34.1691 31.1669 31.992 31.1669 29.3107C31.1669 26.6295 33.0919 24.4524 35.4981 24.4524C37.9273 24.4524 39.8523 26.6524 39.8294 29.3107C39.8294 31.992 37.9273 34.1691 35.4981 34.1691Z"
              fill="white"
            />
          </svg>
          <div className="text-white font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:h-[80px]">
            Join the Reflexion Community
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="flex w-[166px] h-[42px] p-[10px] justify-center items-center rounded-[10px] border border-[#F1ECE7] bg-white transition-colors duration-200 hover:bg-[#e4e4e4] active:bg-[#d6d6d6] focus:outline-none"
            type="button"
          >
            <span className="text-[#707B9E] font-inter text-[20px] font-medium">
              Join
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
