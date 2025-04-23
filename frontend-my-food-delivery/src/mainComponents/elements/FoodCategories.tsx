"use client";

import {useState, useEffect} from "react";
import {axiosInstance} from "@/lib/utils";

type foodCategoryDataType = {
  _id: string;
  name: string;
};
export const FoodCategoriesList = () => {
  const [foodCategoryData, setFoodCategoryData] = useState<
    foodCategoryDataType[]
  >([]);

  const fetchfoodCategoryData = async () => {
    const res = await axiosInstance.get(`/foodCategory`);
    setFoodCategoryData(res.data.foodCategory);
  };

  useEffect(() => {
    fetchfoodCategoryData();
  }, []);

  return (
    <div className="flex-col flex gap-3">
      <p className="text-white font-semibold text-[30px]">Categories</p>
      <div className="flex gap-2">
        {foodCategoryData.map((value, index) => {
          return (
            <button
              key={index}
              className="min-w-[110px] bg-white rounded-full h-[46px] cursor-pointer hover:scale-105 ease-in-out duration-300 hover:bg-red-500"
            >
              {value.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
