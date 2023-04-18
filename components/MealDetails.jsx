import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getMealDetails } from "@/slices/mealDetailsSlice";
import { useRouter } from "next/router";
import {MdExpandLess, MdExpandMore} from 'react-icons/md'

const MealDetails = () => {
	const [seeMore, setSeeMore] = useState(false);

	const router = useRouter();
	const { id } = router.query;

	const dispatch = useDispatch();
	const state = useSelector(state => state.mealDetails);

	useEffect(() => {
		if (id !== undefined) {
			dispatch(getMealDetails(id));
		}
	}, [id]);

	let ingredient, ingredientValue;

	if (state != 0) {
		ingredient = [];
		ingredientValue = [];

		for (let i in state.meals[0]) {
			const regex = /[a-z]+[A-Z]+[a-z]+/g;
			if (i.match(regex).join(" ") === "strIngredient") {
				ingredient.push(state.meals[0][i]);
			}
		}

		for (let i in state.meals[0]) {
			const regex = /[a-z]+[A-Z]+[a-z]+/g;
			if (i.match(regex).join("") === "strMeasure") {
				ingredientValue.push(state.meals[0][i]);
			}
		}
	}

	return (
		<div className="container">
			{state != 0 && (
				<div className="w-full">
					<div className="relative image h-[30rem]">
						<div className="flex gap-2 absolute bottom-3 left-3">
							<span className="font-medium !text-gray-100 btn-success text-lg bg-gray-100 rounded-md px-2">
								{state.meals[0].strCategory}
							</span>
							<span className="font-medium !text-gray-100 btn-success text-lg bg-gray-100 rounded-md px-2">
								{state.meals[0].strArea}
							</span>
						</div>
						<img
							className="w-full h-full object-cover rounded-lg"
							src={state.meals[0].strMealThumb}
							alt=""
						/>
					</div>
					<h1 className="text-3xl font-semibold text-gray-800 mt-3">
						{state.meals[0].strMeal}
					</h1>
					<div>
						<p
							className={`text-gray-500 mt-2 ${!seeMore && "custom-ellipsis"}`}
						>
							{state.meals[0].strInstructions}
						</p>
						<span
							className="text-red-500 text-2xl cursor-pointer"
							onClick={() => {
								setSeeMore(!seeMore);
							}}
						>
							{seeMore ? <MdExpandLess /> : <MdExpandMore />}
						</span>
					</div>
					<div className="mt-4 mb-4 [&>div]:mb-2">
						{ingredient.map(
							(item, index) =>
								item !== "" &&
								item !== null && (
									<div key={index} className="bg-gray-200 pl-2 py-2 rounded-sm">
										<span className="font-medium">{`${item}: `}</span>
										<span className="btn-info px-2 rounded-full">
											{ingredientValue[index]}
										</span>
									</div>
								)
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default MealDetails;
