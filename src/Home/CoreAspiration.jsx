import React from "react";

const CoreAspiration = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-[#f6f9fa] p-12 max-lg:h-auto max-lg:p-4">
      <div className="flex h-auto w-full items-center max-lg:flex-col">
        <div className="basis-1/2">
          <img src="images/abthome.png" alt="Doctor Image" />
        </div>
        <div className="flex basis-1/2 flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-purple-600">
            WELCOME TO BIONOVA
          </p>
          <h1 className="text-3xl font-semibold text-[#46336B]">
            Core aspirations
          </h1>
          <p className="text-base leading-5 text-gray-700">
            At Bionova Research Labs Pvt Ltd (formerly known as Pragati Biocare
            Pvt. Ltd.), we aspire to transform the future of healthcare by
            making breakthrough treatments accessible, safe and affordable for
            all. Our vision is rooted in compassion and driven by science, to
            address even the most complex and underserved medical needs. We are
            committed to pioneering innovation at the intersection of medicine,
            wellnesss & beauty, relentlessly pushing the boundaries of research
            and development. Guided by integrity, purpose and a deep
            responsibility to humanity, we aim to become a global force in
            reshaping lives through science-backed solutions.
          </p>

          <div>
            <div className="mb-8 flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
                stroke-linejoin="round"
                className="lucide lucide-circle-check-big-icon lucide-circle-check-big text-purple-600"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <div>
                <h2 className="mb-2 text-2xl font-medium text-purple-600">
                  Central goals
                </h2>
                <p className="text-xl font-light">
                  To make a positive impact on the lives of patients and their
                  families, and to contribute to a healthier and more equitable
                  world.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
                stroke-linejoin="round"
                className="lucide lucide-circle-check-big-icon lucide-circle-check-big text-purple-600"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <div>
                <h2 className="mb-2 text-2xl font-medium text-purple-600">
                  Strategic outlook
                </h2>
                <p className="text-xl font-light">
                  To revolutionize healthcare by developing innovative and
                  effective treatments that improve the quality of life for
                  patients worldwide.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <button className="my-4 cursor-pointer self-center justify-self-center rounded-2xl bg-purple-800 px-7 py-3 text-sm text-white duration-300 hover:scale-105">
        Read More
      </button>
    </div>
  );
};

export default CoreAspiration;
