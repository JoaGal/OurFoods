import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMealsArea = createAsyncThunk(
	"mealArea/getMealsArea",
	async area => {
		try {
			const { data: response } = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
			);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
		}
	}
);

export const mealsAreaSlice = createSlice({
	name: "mealArea",
	initialState: [],
	reducers: [],
	extraReducers: builder => {
		builder.addCase(getMealsArea.fulfilled, (state, action) => {
			return (state = action.payload);
		});
	},
});

export default mealsAreaSlice.reducer;
