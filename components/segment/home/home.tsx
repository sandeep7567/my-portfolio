"use client";

import Image from "next/image";

export const Home = () => {
  return (
    <div id="home" className="relative flex max-w-4xl mx-auto mt-36 p-2 items-center justify-center">
      <h1 className="text-3xl w-[75%] leading-relaxed break-words font-semibold text-wrap text-center">
        Hi 👋,I am{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
          Sandeep Thakur
        </span>
        , a self-taught{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
          {" "}
          Web Developer
        </span>{" "}
        specializing in{" "}
        <span
         className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
          Next js 
        </span>{" "}
        and the{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
          MERN
        </span>{" "}
        stack.
      </h1>

      <div className="bg-primary-foreground dark:bg-gradient w-48 h-48 left-[50.55rem] -top-4 z-50 rounded-full shadow-xl absolute" >
        <Image
          alt="profile"
          width={700}
          height={700}
          quality={100}
          loading="lazy"
          src={"/projects/spotify-clone.gif"}
          className="object-cover bg-no-repeat bg-center aspect-square rounded-full p-0.5"
        />
      </div>
    </div>
  );
};
