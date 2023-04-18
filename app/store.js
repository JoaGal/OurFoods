import mealDetailsSlice from "@/slices/mealDetailsSlice";
import mealsAreaSlice from "@/slices/mealsAreaSlice";
import mealsSlice from "@/slices/mealsSlice";
import randomSlice from "@/slices/randomSlice";
import searchSlice from "@/slices/searchSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		randomMeal: randomSlice,
		mealDetails: mealDetailsSlice,
		mealsArea: mealsAreaSlice,
		meals: mealsSlice,
		searchMeals: searchSlice,
	},
});
