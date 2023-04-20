import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Single = () => {
  const trending = [
    {
      name: "Seafood",
    },
    { name: "Beef" },
    { name: "Pasta" },
    { name: "Vegan" },
  ];

  const [inputValue, setInputValue] = useState(null);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/searchResults/${inputValue}`);
  };

  return (
    <div className="landingContainer mt-4 flex relative max-w-[120rem] ease-linear duration-300">
      <div className="container">
        <div className="h-[30rem] text-center flex flex-col justify-center gap-3 lg:mr-[30rem] lg:text-left ease-linear duration-300">
          <div className="flex ">
            <h1 className="text-3xl p-3 rounded-sm shadow-lg drop-shadow-lg font-bold text-stone-50 bg-red-600 bg-[url('../assets/bg-black.png')]">
              Search for specific Foods
            </h1>
          </div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="search flex flex-col justify-between h-[9rem] rounded-md p-1 border-0 border-gray-300 lg:flex-row bg-[#ffffffba] lg:bg-white shadow-lg drop-shadow-lg lg:border lg:h-[4rem]"
          >
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              type="text"
              placeholder="Search..."
              className="w-full shadow-lg  lg:shadow-none  outline-none pl-3 font-medium placeholder:font-normal h-2/4 lg:w-5/6 lg:h-full mb-4 rounded-md"
            />
            <button
              type="submit"
              className="w-full lg:w-1/6 h-2/4 lg:h-full flex justify-center items-center text-lg font-medium rounded-md bg-red-600 hover:bg-red-800 ease-linear duration-300 text-white"
            >
              Search
            </button>
          </form>
          <h6 className="text-gray-700 flex gap-1 items-center">
            <span className="text-gray-800 font-medium text-lg bg-[#ffffff] shadow-lg drop-shadow-lg p-1 rounded-sm">Trending:</span>{" "}
            <div className="flex gap-1">
              {trending.map((item, index) => (
                <Link
                  href="/#categories"
                  className="hover:text-green-600 shadow-lg drop-shadow-lg bg-[#eeeeee] p-1 rounded-sm ease-linear duration-100"
                  key={index}
                  scroll={false}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Single;
