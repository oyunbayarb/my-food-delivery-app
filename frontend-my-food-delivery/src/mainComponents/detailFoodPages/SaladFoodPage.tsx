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

export const SaladFoodPage = () => {
  const [oneCategoryFoodPage, setOneCategoryFoodPage] = useState<
    foodCategorydata[]
  >([]);

  const fetchSaladFoodPage = async () => {
    const res = await axiosInstance.get(
      `foodItem/byCategory/68071479e65db822ceeefe47`
    );
    setOneCategoryFoodPage(res.data.foodsByCategory);
  };

  useEffect(() => {
    fetchSaladFoodPage();
  }, []);

  return (
    <div className="flex-col flex gap-3">
      <>
        <p className="text-[30px] text-white font-semibold">Pizzas</p>
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
