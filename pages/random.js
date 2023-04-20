import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getRandomMeal } from "@/slices/randomSlice";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Random = () => {
  const [seeMore, setSeeMore] = useState(false);
  // const meal = {
  // 	idMeal: "53019",
  // 	strMeal: "Pierogi (Polish Dumplings)",
  // 	strDrinkAlternate: null,
  // 	strCategory: "Side",
  // 	strArea: "Polish",
  // 	strInstructions:
  // 		"To prepare the sauerkraut filling, melt the butter in a skillet over medium heat. Stir in the onion, and cook until translucent, about 5 minutes. Add the drained sauerkraut and cook for an additional 5 minutes. Season to taste with salt and pepper, then remove to a plate to cool.\r\n\r\nFor the mashed potato filling, melt the butter in a skillet over medium heat. Stir in the onion, and cook until translucent, about 5 minutes. Stir into the mashed potatoes, and season with salt and white pepper.\r\n\r\nTo make the dough, beat together the eggs and sour cream until smooth. Sift together the flour, salt, and baking powder; stir into the sour cream mixture until dough comes together. Knead the dough on a lightly floured surface until firm and smooth. Divide the dough in half, then roll out one half to 1/8 inch thickness. Cut into 3 inch rounds using a biscuit cutter.\r\n\r\nPlace a small spoonful of the mashed potato filling into the center of each round. Moisten the edges with water, fold over, and press together with a fork to seal. Repeat procedure with the remaining dough and the sauerkraut filling.\r\n\r\nBring a large pot of lightly salted water to a boil. Add perogies and cook for 3 to 5 minutes or until pierogi float to the top. Remove with a slotted spoon.",
  // 	strMealThumb:
  // 		"https://www.themealdb.com/images/media/meals/45xxr21593348847.jpg",
  // 	strTags: null,
  // 	strYoutube: "https://www.youtube.com/watch?v=lyqDmUroZrI",
  // 	strIngredient1: "Butter",
  // 	strIngredient2: "Chopped Onion",
  // 	strIngredient3: "Sauerkraut",
  // 	strIngredient4: "Butter",
  // 	strIngredient5: "Chopped Onion",
  // 	strIngredient6: "Potatoes",
  // 	strIngredient7: "Eggs",
  // 	strIngredient8: "Sour Cream",
  // 	strIngredient9: "Flour",
  // 	strIngredient10: "Salt",
  // 	strIngredient11: "Baking Powder",
  // 	strIngredient12: "",
  // 	strIngredient13: "",
  // 	strIngredient14: "",
  // 	strIngredient15: "",
  // 	strIngredient16: "",
  // 	strIngredient17: "",
  // 	strIngredient18: "",
  // 	strIngredient19: "",
  // 	strIngredient20: "",
  // 	strMeasure1: "2 tbs",
  // 	strMeasure2: "1/3 cup",
  // 	strMeasure3: "1 1/2 cups ",
  // 	strMeasure4: "3 tbs",
  // 	strMeasure5: "1/2 cup ",
  // 	strMeasure6: "2 cups ",
  // 	strMeasure7: "3",
  // 	strMeasure8: "1 pot",
  // 	strMeasure9: "3 cups ",
  // 	strMeasure10: "1/4 tsp",
  // 	strMeasure11: "1 tbs",
  // 	strMeasure12: " ",
  // 	strMeasure13: " ",
  // 	strMeasure14: " ",
  // 	strMeasure15: " ",
  // 	strMeasure16: " ",
  // 	strMeasure17: " ",
  // 	strMeasure18: " ",
  // 	strMeasure19: " ",
  // 	strMeasure20: " ",
  // 	strSource:
  // 		"https://www.allrecipes.com/recipe/109914/pierogi-polish-dumplings/",
  // 	strImageSource: null,
  // 	strCreativeCommonsConfirmed: null,
  // 	dateModified: null,
  // };

  const dispatch = useDispatch();
  const state = useSelector((state) => state.randomMeal);

  useEffect(() => {
    dispatch(getRandomMeal());
  }, []);

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
    <div className="shadow-inner flex flex-col items-center bg-[#fffffff1]">
      <div className="container">
        {state != 0 && (
          <div className="w-full lg:mb-20 mb-10">
            <div className="relative image h-[30rem] lg:mt-20 mt-10">
              <div className="flex gap-2 absolute bottom-3 left-3">
                <span className="font-medium !text-gray-100 btn-success text-lg bg-gray-100 rounded-md px-2">
                  {state.meals[0].strCategory}
                </span>
                <span className="font-medium !text-gray-100 btn-success text-lg bg-gray-100 rounded-md px-2">
                  {state.meals[0].strArea}
                </span>
              </div>
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg drop-shadow-lg"
                src={state.meals[0].strMealThumb}
                alt=""
              />
            </div>
            <h1 className="text-3xl p-3 bg-[url('../assets/bg-black.png')] rounded-sm shadow-lg drop-shadow-lg font-bold text-stone-50 bg-[#ff0707] mt-3">
              {state.meals[0].strMeal}
            </h1>
            <div>
              <p
                className={`text-gray-500 mt-2 ${
                  !seeMore && "custom-ellipsis"
                }`}
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
                    <div
                      key={index}
                      className="bg-gray-200 pl-2 py-2 rounded-sm"
                    >
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
    </div>
  );
};

export default Random;
