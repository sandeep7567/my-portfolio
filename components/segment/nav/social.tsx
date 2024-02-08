"use client";

import Link from "next/link";
import { FC } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { cn } from "@/lib/utils";

interface SocialProps {
  className?: React.ReactNode
}

export const Social: FC<SocialProps> = ({
  className
}) => {
  return (
    <div className={cn(
      "flex gap-x-4 items-center xl:mr-0", className,
    )}>
      <Link
        href="https://github.com/sandeep7567"
        target="_blank"
        className="cursor-pointer"
      >
        <BsGithub size={24} color="#f43f5e"  />
      </Link>
      <Link
        href="https://twitter.com/Sandeep7567"
        target="_blank"
        className="cursor-pointer"
      >
        <BsTwitter size={24} color="#38bdf8" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sandeepthakur3000/"
        target="_blank"
        className="cursor-pointer"
      >
        <BsLinkedin size={24} color="#0a66c2" />
      </Link>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        className="cursor-pointer"
      >
        <BsInstagram size={24} color={"#b5179e"} />
      </Link>
      <Link
        href="https://www.whatsapp.com/"
        target="_blank"
        className="cursor-pointer"
      >
        <BsWhatsapp size={24} color={"#1ad52d"} />
      </Link>
    </div>
  );
};
