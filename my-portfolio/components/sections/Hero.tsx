import React from "react";
import Image from "next/image";
import Button from "../uikit/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div
          className="flex min-h-screen flex-col items-center justify-center gap-10
             md:gap-14
             lg:flex-row lg:gap-20"
        >
          {/* <!-- Text Content --> */}
          <div
            className="w-full text-center
               md:max-w-2xl md:text-left
               lg:w-1/2"
          >
            <h1
              className="font-extrabold leading-tight
                 text-[clamp(2rem,4.5vw,3rem)] text-foreground"
            >
              Prasanth Kumar V
            </h1>

            <h2 className="block text-black">Front-End Developer</h2>

            <p
              className="mt-6 text-gray-600
                 text-[clamp(1rem,2.2vw,1rem)]
                 max-w-xl mx-auto md:mx-0"
            >
              A responsive hero section crafted for mobile, tablet, laptop, and
              desktop — optimized for real-world Windows scaling.
            </p>

            {/* <!-- CTAs --> */}
            <div
              className="mt-8 flex flex-col gap-4
                 sm:flex-row sm:justify-center
                 md:justify-start"
            >
              <Button> Download Resume</Button>
            </div>
          </div>

          {/* <!-- Image / Visual --> */}
          <div className="w-full max-w-md md:max-w-lg lg:w-1/2">
            <div
              className="relative mx-auto rounded-2xl bg-white/5 p-2
                 backdrop-blur border border-white/10
                 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Dashboard preview"
                className="rounded-xl object-cover"
                width={1000}
                height={1000}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
