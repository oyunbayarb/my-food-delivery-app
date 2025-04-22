"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
    <div className="flex-col">
      <p className="text-white font-semibold text-[30px]">Categories</p>
      <Carousel className="flex w-full">
        <CarouselContent className="w-fit flex p-4 overflow-scroll">
          {foodCategoryData?.map((element, index) => {
            return (
              <div>
                <CarouselItem key={index}>
                  <button className="bg-white rounded-full min-w-[116px] flex h-[46px] justify-center items-center">
                    {element.name}
                  </button>
                </CarouselItem>
              </div>
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
