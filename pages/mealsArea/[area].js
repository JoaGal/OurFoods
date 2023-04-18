import { getMealsArea } from "@/slices/mealsAreaSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Area = () => {
	const router = useRouter();
	const { area } = router.query;

	const dispatch = useDispatch();
	const meals = useSelector(state => state.mealsArea);

	useEffect(() => {
		if (area !== undefined) {
			dispatch(getMealsArea(area));
		}
	}, [area]);

	return (
		<div className="container">
			<div className="title relative text-center text-3xl font-semibold text-gray-800 my-4">
				<span className="absolute w-16 h-[2px] bg-red-600 top-12 left-2/4 translate-x-[-50%] z-10"></span>
				<span className="absolute w-40 h-[2px] bg-gray-300 top-12 left-2/4 translate-x-[-50%] z-0"></span>
				<h3>{area} meals</h3>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
				{meals != 0 &&
					meals.meals.map(item => (
						<Link key={item.idMeal} href={`/meal/${item.idMeal}`}>
							<div className="flex flex-col relative">
								<div className="overlay absolute w-full h-3/6 bottom-0 bg-gradient-to-t from-black to-transparent rounded-md"></div>
								{/* <span className="absolute bg-gray-200 shadow-md rounded-[3px] text-md font-medium left-2 top-2 px-2 py-0 z-20">
									
								</span> */}
								<span className="absolute bg-red-600 text-stone-50 shadow-md rounded-[3px] text-md font-medium right-2 top-2 px-2 py-0 z-20">
									8.8
								</span>
								<img src={item.strMealThumb} alt="" className="rounded-md" />
								<h4 className="absolute w-full text-start py-3 pl-3 bottom-0 left-2/4 translate-x-[-50%] text-lg font-[500] text-white z-20">
									{item.strMeal}
								</h4>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Area;
