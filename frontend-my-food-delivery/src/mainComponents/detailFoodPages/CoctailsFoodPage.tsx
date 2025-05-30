"use client";

import {useEffect, useState} from "react";
import {axiosInstance} from "@/lib/utils";
import {OneFoodCard} from "../elements";

type foodCategorydata = {
  foodName: string;
  price: number;
  ingredients: string;
  categoryName: string;
  image: string;
};

export const CoctailsFoodPage = () => {
  const [oneCategoryFoodPage, setOneCategoryFoodPage] = useState<
    foodCategorydata[]
  >([]);

  const fetchCoctailsFoodPage = async () => {
    const res = await axiosInstance.get(
      `foodItem/byCategory/6801e08bea00556a8dd1ea2d`
    );
    setOneCategoryFoodPage(res.data.foodsByCategory);
  };

  useEffect(() => {
    fetchCoctailsFoodPage();
  }, []);

  return (
    <div className="flex-col flex gap-3">
      <>
        <p className="text-[30px] text-white font-semibold">Coctails</p>
      </>
      <div className="flex flex-wrap gap-5">
        {oneCategoryFoodPage.map((value, index) => {
          return (
            <div className="flex" key={index}>
              <OneFoodCard
                imageSrc={value.image}
                foodTitle={value.foodName}
                foodPrice={value.price}
                foodIngredients={value.ingredients}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
