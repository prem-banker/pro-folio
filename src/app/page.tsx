import "./home.css";

export default function Home() {
  return (
    <div className="min-h-inherit flex-center-items home-bg">
      <div className="mx-auto flex items-center justify-center w-[1080px]">
        <div className="w-1/2 p-8 ">
          <p className="text-body">Hi all. I am</p>
          <h1 className="text-headline font-regular leading-shrink">
            Prem Banker
          </h1>
          <h4 className="text-secondaryBrightPurple text-subheadline mb-20">
            {" "}
            &gt; Front end Developer
          </h4>
          <div className="text-secondaryLightBlue font-labels">
            // complete the game to continue
          </div>
          <div className="text-secondaryLightBlue font-labels">
            // you can also see it on my Github page
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

        <div
          className="w-1/2 min-h-[400px] bg-contain bg-no-repeat bg-center relative overflow-hidden"
          // style={{ backgroundImage: "url('/home/bg-gradient.png')" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[510px] h-[475px]  rounded border border-stroke"></div>
          </div>
        </div>

        {/* <div className="w-1/2">
     
          <Image src="/home/bg-gradient.png" alt="Hero Image" width={600} height={400} />
        </div> */}
      </div>
    </div>
  );
}
