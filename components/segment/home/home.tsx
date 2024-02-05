"use client";

import Image from "next/image";

export const Home = () => {
  return (
    <div id="home" className="relative flex flex-col-reverse gap-y-8 max-w-4xl mr-auto lg:mx-auto mt-36 p-2 items-center justify-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl w-full md:w-[90%] lg:w-[80%] leading-relaxed break-words font-semibold text-wrap text-center">
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

      <div className="bg-primary-foreground dark:bg-gradient w-36 h-36 md:w-48 md:h-48 left-[35rem] md:left-[45rem] lg:left-[50.55rem] -top-10 md:-top-10 lg:-top-10 z-50 rounded-full shadow-xl block lg:absolute" >
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
