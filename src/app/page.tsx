import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto flex items-center justify-center">
        {/* Left Column: Basic Information */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod leo et ligula
            luctus ultrices. Ut eget nunc odio. Sed nec purus ut sapien consequat dictum.
          </p>
          {/* Add more basic information here */}
        </div>
        {/* Right Column: Hero Image or Canvas Element */}
        <div className="w-1/2">
          {/* Replace the Image component with your hero image or canvas element */}
          <Image src="/hero.jpg" alt="Hero Image" width={600} height={400} />
        </div>
      </div>
    </div>
  );
}
