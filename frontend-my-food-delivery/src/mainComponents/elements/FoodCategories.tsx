"use client";

import {useState, useEffect} from "react";
import {axiosInstance} from "@/lib/utils";
import {useRouter, useSearchParams} from "next/navigation";

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
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("categoryID");

  const handleCategoryID = (_id: string) => {
    {
      id == _id ? router.push("/") : router.push(`?categoryID=${_id}`);
    }
  };
  return (
    <div className="flex-col flex gap-3">
      <p className="text-white font-semibold text-[30px]">Categories</p>
      <div className="flex gap-5 w-full">
        {foodCategoryData.map((value, index) => {
          return (
            <button
              onClick={() => handleCategoryID(value._id)}
              key={index}
              className="min-w-[155px] bg-white rounded-full h-[46px] cursor-pointer hover:scale-105 ease-in-out duration-300 hover:bg-red-500"
            >
              {value.name}
            </button>
          );
        })}
        <button className="min-w-[155px] bg-white rounded-full h-[46px] cursor-pointer hover:scale-105 ease-in-out duration-300 hover:bg-red-500">
          See all foods
        </button>
      </div>
    </div>
  );
};
