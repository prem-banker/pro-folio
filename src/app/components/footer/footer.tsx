import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// components/Header.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryLightNavyBlue text-secondaryLightBlue h-12 flex items-center justify-between border-t border-line rounded-lg">
      <div className="flex-vertical-center">
        <div className=" px-[22px] border-r border-line flex-vertical-center">
          find me on :
        </div>

        <div className="border-r border-line flex-vertical-center">
          <a
            href="https://twitter.com"
            target="_blank"
            className="group h-full"
          >
            <div className="h-full border-r border-line flex-vertical-center px-[14px] group-hover:bg-gray-200 transition-all duration-300 cursor-pointer">
              <FaTwitter
                className="text-secondaryLightBlue group-hover:text-secondaryFluorescentGreen transition-colors duration-300"
                size={20}
              />
            </div>
          </a>
        </div>

        <div className="border-r border-line flex-vertical-center">
          <a
            href="https://twitter.com"
            target="_blank"
            className="group h-full"
          >
            <div className="h-full border-r border-line flex-vertical-center px-[14px] group-hover:bg-gray-200 transition-all duration-300 cursor-pointer">
              <FaLinkedin
                className="text-secondaryLightBlue group-hover:text-secondaryFluorescentGreen transition-colors duration-300"
                size={20}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex-center-items">
        <a
          href="https://github.com/prem-banker"
          target="_blank"
          className="group h-full"
        >
          <div className="h-full px-[14px] flex-vertical-center  group-hover:bg-gray-200  group-hover:text-secondaryFluorescentGreen transition-all duration-300 cursor-pointer">
            <span className="mr-2">@prem-banker</span> <FaGithub />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-primaryLightNavyBlue text-secondaryLightBlue h-16 flex items-center justify-between border-b border-line rounded-lg">
//       <div className="container mx-auto flex-vertical-center">
//         <div className="flex items-center">
//           <p className="mr-4">Find me on:</p>
//           <div className="border border-white p-2 mr-4">
//             <a href="https://twitter.com">
//               <FaTwitter className="text-secondaryLightBlue" />
//             </a>
//           </div>
//           <div className="border border-white p-2 mr-4">
//             <a href="https://linkedin.com">
//               <FaLinkedin className="text-secondaryLightBlue" />
//             </a>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <div className="border border-white p-2 mr-4">
//             <a href="https://github.com/yourusername">
//               <FaGithub className="text-secondaryLightBlue" />
//             </a>
//           </div>
//           <p>yourusername</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
