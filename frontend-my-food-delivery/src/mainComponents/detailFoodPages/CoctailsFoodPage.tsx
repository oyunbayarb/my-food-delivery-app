"use client";

import {useEffect, useState} from "react";
import {axiosInstance} from "@/lib/utils";
import {OneFoodCard} from "../elements";

type foodCategorydata = {
  foodName: string;
  price: number;
  ingredients: string;
  categoryName: string;
};

export const CoctailsFoodPage = () => {
  const [oneCategoryFoodPage, setOneCategoryFoodPage] = useState<
    foodCategorydata[]
  >([]);

  const fetchCoctailsFoodPage = async () => {
    const res = await axiosInstance.get(
      `foodItem/byCategory/6801e513ea00556a8dd1ea35`
    );
    setOneCategoryFoodPage(res.data.foodsByCategory);
  };

  useEffect(() => {
    fetchCoctailsFoodPage();
  }, []);

  return (
    <div className="flex-col gap-3">
      <p className="text-[30px] text-white font-semibold">Coctails</p>

      {oneCategoryFoodPage.map((value, index) => {
        return (
          <div className="flex-wrap flex">
            <OneFoodCard
              key={index}
              foodTitle={value.foodName}
              foodPrice={value.price}
              foodIngredients={value.ingredients}
            />
          </div>
        );
      })}
    </div>
  );
};
