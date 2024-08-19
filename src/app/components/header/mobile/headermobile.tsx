"use client";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import userdata from "../../../../../public/data/user.json";
import React, { useState } from "react";

import Link from "next/link";
import { FaBars, FaLinkedin, FaTwitter } from "react-icons/fa";
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

  return (
    <header className="bg-primaryLightNavyBlue text-secondaryLightBlue h-[56px] flex items-center justify-between p-4">
      <div className="flex items-center">
        <span className="font-semibold">~$ ./{userdata.user.logo_text}</span>
        <span className="cursor bg-secondaryFluorescentGreen"></span>
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
              <div className="flex items-center">
                <span className="font-semibold">
                  ~$ ./{userdata.user.logo_text}
                </span>
                <span className="cursor bg-secondaryFluorescentGreen"></span>
              </div>
              <IconButton
                onClick={toggleDrawer(false)}
                className="self-end"
                color="inherit"
              >
                <FaXmark />
              </IconButton>
            </div>

            <Link href="/" passHref legacyBehavior>
              <div className="p-4 text-white hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer border-b border-line">
                _hello
              </div>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <div className="p-4 text-white hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer border-b border-line">
                _about
              </div>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <div className="p-4 text-white hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer border-b border-line">
                _projects
              </div>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <div className="p-4 text-white hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer border-b border-line">
                _contact-me
              </div>
            </Link>
          </div>

          <div className="h-[56px] border-t border-line rounded-sm flex items-center">
            <div className="border-r border-line flex items-center pl-4 h-full flex-grow">
              find me on:
            </div>
            <div className="flex h-full">
              <a
                href="https://twitter.com"
                target="_blank"
                className="group h-full"
              >
                <div className="border-r border-line flex-vertical-center px-[14px] group-hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                  <FaXTwitter
                    className="text-secondaryLightBlue group-hover:text-secondaryFluorescentGreen transition-colors duration-300"
                    size={20}
                  />
                </div>
              </a>
              <a
                href="https://twitter.com"
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
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default HeaderMobile;
