"use client";

export const Home = () => {
  return (
    <div id="home" className="flex max-w-4xl mx-auto mt-52 p-2 items-center justify-center">
      <h1 className="text-3xl break-words font-medium  text-wrap text-center">
        Hi 👋,I am{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-tl from-indigo-500 via-fuchsia-500 to-amber-500">
          Sandeep Thakur
        </span>
        , a self-taught{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-tl from-indigo-500 via-fuchsia-500 to-amber-500">
          {" "}
          web developer
        </span>{" "}
        specializing in{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-tl from-indigo-500 via-fuchsia-500 to-amber-500">
          Next js
        </span>{" "}
        and the{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-tl from-indigo-500 via-fuchsia-500 to-amber-500">
          MERN
        </span>{" "}
        stack.
      </h1>
    </div>
  );
};
