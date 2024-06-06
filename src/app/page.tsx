import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-inherit flex-center-items">
      <div className="container mx-auto flex items-center justify-center w-[1080px]">

        <div className="w-1/2 p-8 ">
          <p className="text-body">
            Hi all. I am
          </p>
          <h1 className="text-headline font-regular leading-shrink">Prem Banker</h1>
          <h4 className="text-secondaryBrightPurple text-subheadline mb-20"> &gt; Front end Developer</h4>
          <div className="text-secondaryLightBlue font-labels">// complete the game to continue</div>
          <div className="text-secondaryLightBlue font-labels">// you can also see it on my Github page</div>

          <div className="font-labels"> <span className="text-secondaryBrightPurple">const</span> <span className="text-accentBrightGreen"> githubLink</span> =  <span className="text-accentPastelPink">https://github.com/prem-baner </span> </div>

         
        </div>
        
        <div className="w-1/2">
          {/* Replace the Image component with your hero image or canvas element */}
          {/* <Image src="/hero.jpg" alt="Hero Image" width={600} height={400} /> */}
        </div>
      </div>
    </div>
  );
}
