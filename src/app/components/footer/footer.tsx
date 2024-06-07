import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';




// components/Header.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryLightNavyBlue text-secondaryLightBlue h-12 flex items-center justify-between border-t border-line rounded-lg">
      <div className="flex-vertical-center">

        <div className=" px-[22px] border-r border-line flex-vertical-center">
          fine me on :
        </div>

        <div className="border-r border-line flex-vertical-center">
          <a href="https://twitter.com" className='px-[14px]'>
            <FaTwitter className="text-secondaryLightBlue" size={20} />
          </a>
        </div>

        <div className="border-r border-line flex-vertical-center">
          <a href="https://twitter.com" className='px-[14px]'>
            <FaLinkedin className="text-secondaryLightBlue" size={20} />
          </a>
        </div>



      </div>
      <div className="border-r border-line flex-center-items">
        <a href="https://github.com/prem-banker" className='px-[14px] flex-center-items'>
          <span className='mr-2'>@prem-banker</span> <FaGithub />
          

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
