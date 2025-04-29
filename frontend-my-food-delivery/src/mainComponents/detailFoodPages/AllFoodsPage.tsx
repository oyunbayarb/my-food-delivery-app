"use client";

import {useEffect, useState} from "react";
import {axiosInstance} from "@/lib/utils";
import {FoodCategoriesList, OneFoodCard} from "../elements";
import {useSearchParams} from "next/navigation";

type food = {
  image: string;
  foodName: string;
  price: number;
  ingredients: string;
  _id: string;
};

type foodCategorydata = {
  _id: string;
  name: string;
  foods: food[];
};

export const AllFoodsPage = () => {
  const [oneCategoryFoodPage, setOneCategoryFoodPage] = useState<
    foodCategorydata[]
  >([]);
  const searchParams = useSearchParams();
  const id = searchParams.get("categoryID");
  const fetchAllFoodsPage = async () => {
    const res = await axiosInstance.get(`foodItem?categoryID=${id ? id : ""}`);
    setOneCategoryFoodPage(res.data.food);
  };

  useEffect(() => {
    fetchAllFoodsPage();
  }, [searchParams]);

  return (
    <div className="flex flex-col gap-[44px]">
      {oneCategoryFoodPage.map((element) => {
        return (
          <div key={element._id} className="flex flex-col">
            <p className="text-[30px] text-white font-semibold">
              {element.name}
            </p>
            <div className="flex gap-7">
              {element.foods.slice(0, 5).map((food, index) => {
                return (
                  <OneFoodCard
                    key={index}
                    imageSrc={food.image}
                    foodTitle={food.foodName}
                    foodPrice={food.price}
                    foodIngredients={food.ingredients}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
