"use client";
import "./home.css";
import userdata from "../../public/data/user.json";
import ParticleAnimation from "./components/particle-animation/particleanimation";
import BubbleAnimation from "./components/particle-animation/bubbleanimation";
import Image from "next/image";
import AnimatedText from "./components/animatedtext/animatedtext";

export default function Home() {
  return (
    <div className="min-h-inherit flex-center-items relative">
      {/* <BubbleAnimation /> */}
      <div className="mx-auto flex items-center justify-center w-[1080px]">
        <div className="w-1/2 p-8 ">
          <p className="text-body">Hi all. I am</p>
          <h1 className="text-headline font-regular leading-shrink">
            {userdata.user.name}
          </h1>
          <h4 className="text-secondaryBrightPurple text-subheadline mb-20">
            <AnimatedText />
          </h4>
          <div className="text-secondaryLightBlue font-labels">
            &#47;&#47; complete the game to continue
          </div>
          <div className="text-secondaryLightBlue font-labels">
            &#47;&#47; you can also see it on my Github page
          </div>

          <div className="font-labels">
            {" "}
            <span className="text-secondaryBrightPurple">const</span>{" "}
            <span className="text-accentBrightGreen"> githubLink</span> ={" "}
            <span className="text-accentPastelPink">
              https://github.com/prem-baner{" "}
            </span>{" "}
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
