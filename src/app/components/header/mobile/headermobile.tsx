"use client";
import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import userdata from "../../../../../public/data/user.json";

import Link from "next/link";
import { FaBars, FaLinkedin } from "react-icons/fa";
import { FaXmark, FaXTwitter } from "react-icons/fa6";

const HeaderMobile: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const user = userdata.user;
  const socials = user.socials;

  const findSocialLink = (name: string) =>
    socials.find((social) => social.name.toLowerCase() === name.toLowerCase())
      ?.link;
  const devpostLink = findSocialLink("dev post");
  const linkedinLink = findSocialLink("linkedin");

  return (
    <header className="bg-primaryLightNavyBlue text-secondaryLightBlue h-[56px] flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center" passHref>
          <span className="font-semibold">~$ ./{userdata.user.logo_text}</span>
          <span className="cursor bg-secondaryFluorescentGreen"></span>
        </Link>
      </div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <FaBars className="mr-2" />
      </IconButton>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-[60vw] flex flex-col pt-4 h-full bg-primaryLightNavyBlue text-white justify-between"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div>
            <div className="flex justify-between border-b border-line px-4 pb-2 ">
              <div className="flex items-center justify-center">
                <Link href="/" passHref className="flex items-center">
                  <span className="text-[0.8em] font-semibold">
                    ~$ ./{userdata.user.logo_text}
                  </span>
                  <span className="cursor bg-secondaryFluorescentGreen"></span>
                </Link>
              </div>
              <IconButton
                onClick={toggleDrawer(false)}
                className="self-end"
                color="inherit"
                size="small"
              >
                <FaXmark />
              </IconButton>
            </div>

            <Link href="/" passHref legacyBehavior>
              <div className="p-4 text-white hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer border-b border-line">
                _hello
              </div>
            </Link>
            <Link href="/about/bio" passHref legacyBehavior>
              <div className="p-4 text-white hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer border-b border-line">
                _about
              </div>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <div className="p-4 text-white hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer border-b border-line">
                _projects
              </div>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <div className="p-4 text-white hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer border-b border-line">
                _contact-me
              </div>
            </Link>
          </div>

          <div className="h-[56px] border-t border-line rounded-sm flex items-center">
            <div className="border-r border-line flex items-center pl-4 h-full flex-grow text-[0.8em]">
              find me on:
            </div>
            <div className="flex h-full">
              {linkedinLink && (
                <div className="border-r border-line flex-vertical-center">
                  <a
                    href={linkedinLink}
                    target="_blank"
                    className="group h-full"
                  >
                    <div className="border-r border-line flex-vertical-center px-[14px] group-hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                      <FaLinkedin
                        className="text-secondaryLightBlue group-hover:text-secondaryFluorescentGreen transition-colors duration-300"
                        size={20}
                      />
                    </div>
                  </a>
                </div>
              )}

              {devpostLink && (
                <div className="border-r border-line flex-vertical-center">
                  <a
                    href={devpostLink}
                    target="_blank"
                    className="group h-full"
                  >
                    <div className="h-full border-r border-line flex-vertical-center px-[14px] group-hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                      <img
                        src="/icons/devpost.svg"
                        alt="Devpost"
                        className="text-secondaryLightBlue group-hover:hidden transition-colors duration-300"
                        width={20}
                        height={20}
                      />
                      <img
                        src="/icons/devpostactive.svg"
                        alt="Devpost Active"
                        className="hidden group-hover:inline-block transition-colors duration-300"
                        width={20}
                        height={20}
                      />
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default HeaderMobile;
