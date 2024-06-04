import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto flex items-center justify-center">
        {/* Left Column: Basic Information */}
        <div className="w-1/2 p-8">
          <p className="text-body">
            Hi all. I am
          </p>
          <h1 className="text-headline font-regular mb-4">Prem Banker</h1>
          <h4 className="text-secondaryBrightPurple text-subheadline"> &gt; Front end Developer</h4>
         
        </div>
        
        <div className="w-1/2">
          {/* Replace the Image component with your hero image or canvas element */}
          {/* <Image src="/hero.jpg" alt="Hero Image" width={600} height={400} /> */}
        </div>
      </div>
    </div>
  );
}
