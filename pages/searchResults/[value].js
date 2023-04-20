import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMeals } from "@/slices/searchSlice";
import Link from "next/link";

const SearchResults = () => {
  const router = useRouter();
  const { value } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    if (value !== undefined) {
      dispatch(fetchSearchMeals(value));
    }
  }, [value]);

  const meals = useSelector((state) => state.searchMeals.meals);

  return (
    <div className="shadow-inner flex flex-col items-center bg-[#fffffff1] h-[100vh]">
      <div className="container mt-10 lg:mt-20">
        <div className="meals flex flex-col gap-3 bg-white shadow-lg drop-shadow-lg rounded-sm">
          {meals != null &&
            meals.map((item) => (
              <Link
                key={item.idMeal}
                href={`/meal/${item.idMeal}`}
                className={`relative flex h-[6rem] border shadow-sm rounded-[3px] p-1`}
              >
                <img
                  src={item.strMealThumb}
                  alt=""
                  className="rounded-md w-[6rem] object-cover"
                />
                <div className="info w-full">
                  <h4 className="w-full text-start pt-3 pl-3 text-lg font-[500] text-gray-900 z-20">
                    {item.strMeal}
                  </h4>
                  <span className="rounded-[3px] text-md font-medium px-3 py-0 z-20">
                    {item.strCategory}
                  </span>
                  <span className="absolute bg-red-600 text-stone-50 shadow-md rounded-[3px] text-md font-medium right-2 top-2 px-2 py-0 z-20">
                    8.8
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
