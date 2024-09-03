"use client";
import Image from "next/image";
import userdata from "../../../../public/data/user.json";
import AnimatedText from "../../components/animatedtext/animatedtext";

export default function HomeWeb() {
  return (
    <div className="min-h-inherit flex-center-items relative">
      <div className="mx-auto flex flex-row items-center justify-center text-white w-full max-w-[1080px] px-4 lg:px-0">
        <div className="w-1/2 p-8 ">
          <p className="md:text-code lg:text-body 2xl:text-[1.5em]">
            Hi all. I am
          </p>
          <h1 className="md:text-[48px] lg:text-headline 2xl:text-[4em] font-regular leading-shrink">
            {userdata.user.name}
          </h1>
          <h4 className="text-secondaryBrightPurple md:text-[24px] lg:text-subheadline">
            <AnimatedText />
          </h4>
          <div className="text-secondaryLightBlue font-labels">
            &#47;&#47; A Developer&apos;s Portfolio by Prem Banker
          </div>
          <div className="text-secondaryLightBlue font-labels">
            &#47;&#47; You can see the code for this site here
          </div>

          <div className="font-labels">
            {" "}
            <span className="text-secondaryBrightPurple">const</span>{" "}
            <span className="text-accentBrightGreen"> codeLink</span> ={" "}
            <a
              href="https://github.com/prem-banker/pro-folio"
              className="text-accentOrange hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/prem-banker/pro-folio
            </a>
          </div>
        </div>

        <div className="w-1/2 min-h-[400px] bg-contain bg-no-repeat bg-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/home/hero-home3.svg"
                alt="Hero Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
