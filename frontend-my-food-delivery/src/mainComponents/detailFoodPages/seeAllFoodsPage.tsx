"use client";

import {axiosInstance} from "@/lib/utils";
import {useEffect, useState} from "react";
import {OneFoodCard} from "../elements";

type allFoodsdataType = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};

export const SeeAllFoodsPage = () => {
  const [allFoodsdata, setAllfoodsData] = useState<allFoodsdataType[]>([]);

  const fetchallFoodsdata = async () => {
    const res = await axiosInstance.get(`/foodItem`);
    setAllfoodsData(res.data.foodItems);
  };

  useEffect(() => {
    fetchallFoodsdata();
  }, []);

  return (
    <div className="flex gap-3 flex-wrap">
      {allFoodsdata.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.category}</p>
            <div>
              <OneFoodCard
                foodTitle={value.foodName}
                foodPrice={value.price}
                foodIngredients={value.ingredients}
              ></OneFoodCard>
            </div>
          </div>
        );
      })}
    </div>
  );
};
