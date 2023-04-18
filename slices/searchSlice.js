import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchMeals = createAsyncThunk(
	"search/fetchSearchMeals",
	async value => {
		try {
			const { data: response } = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
			);
			return response;
		} catch (error) {
			console.log(error);
		}
	}
);

export const searchMeals = createSlice({
	name: "search",
	initialState: [],
	extraReducers: builder => {
		builder.addCase(fetchSearchMeals.fulfilled, (state, action) => {
			return (state = action.payload);
		});
	},
});

export default searchMeals.reducer;
