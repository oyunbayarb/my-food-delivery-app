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

export const DessertsFoodPage = () => {
  const [oneCategoryFoodPage, setOneCategoryFoodPage] = useState<
    foodCategorydata[]
  >([]);

  const fetchDessertFoodPage = async () => {
    const res = await axiosInstance.get(
      `foodItem/byCategory/6801e57bea00556a8dd1ea3f`
    );
    setOneCategoryFoodPage(res.data.foodsByCategory);
  };

  useEffect(() => {
    fetchDessertFoodPage();
  }, []);

  return (
    <div className="flex-col flex gap-3">
      <>
        <p className="text-[30px] text-white font-semibold">Desserts</p>
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
