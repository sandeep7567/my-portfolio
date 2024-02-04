"use client";

import { Linkedin } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";

interface SocialProps {}

export const Social: FC<SocialProps> = ({}) => {
  return (
    <div className="flex gap-x-4 items-center xl:mr-0">
      <Link
        href="https://github.com/sandeep7567"
        target="_blank"
        className="cursor-pointer"
      >
        <BsGithub size={24} className="fill-green-500" />
      </Link>
      <Link href="https://www.google.com" target="_blank" className="cursor-pointer">
        <BsTwitter size={24} className="fill-sky-400" />
      </Link>
      <Link
        href="https://www.google.com"
        target="_blank"
        className="cursor-pointer"
      >
        <Linkedin size={24} color="#1d73a0"/>
      </Link>
      <Link
        href="https://www.google.com"
        target="_blank"
        className="cursor-pointer"
      >
        <BsInstagram size={24} color={"#b5179e"} />
      </Link>
    </div>
  );
};
