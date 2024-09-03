"use client";
import userdata from "../../../../public/data/user.json";
import AnimatedText from "../../components/animatedtext/animatedtext";
import "./homemobile.css";

export default function HomeMobile() {
  return (
    <div className="h-full flex flex-col items-center pt-32 p-4 home-bg  text-left flex-grow">
      <div className="w-full p-4 text-white">
        <p className="text-body">Hi all. I am</p>
        <h1 className="text-headline font-regular leading-tight">
          {userdata.user.name}
        </h1>
        <h4 className="text-accentOrange text-[1.5em] mb-2">
          <AnimatedText />
        </h4>

        <div className="text-secondaryLightBlue font-labels  mb-4">
          &#47;&#47; check out the site code on
        </div>
        <div className="font-labels">
          <span className="text-secondaryBrightPurple">const</span>{" "}
          <span className="text-accentBrightGreen">codeLink</span> ={" "}
          <a
            href="https://github.com/prem-banker/pro-folio"
            className="text-accentOrange underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/prem-banker/pro-folio
          </a>
        </div>
      </div>
    </div>
  );
}
