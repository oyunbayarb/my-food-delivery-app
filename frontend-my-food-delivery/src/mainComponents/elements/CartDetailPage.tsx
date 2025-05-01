import {CircleX} from "lucide-react";
import {Plus} from "lucide-react";
import {Minus} from "lucide-react";

export const CartDetailsPage = () => {
  return (
    <div className="w-full rounded-2xl bg-white h-fit p-2 gap-1 flex flex-col">
      <div className="flex flex-row justify-between">
        <p className="text-black font-bold text-[18px]">My Cart</p>
      </div>

      <div className="w-full h-fit flex-row flex gap-2">
        <img
          className="w-[50%] rounded-2xl"
          src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=300"
        ></img>
        <div className="flex flex-col">
          <div className="w-[50%] flex-col flex">
            <div className="flex-row flex justify-between">
              <p className="text-red-600 text-[15px]">Sunshine Stackers</p>
              <CircleX className="size-5 text-black ursor-pointer hover:scale-105 ease-in-out duration-300 hover:text-red-500" />
            </div>

            <p className="text-black text-[10px]">
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </p>
          </div>

          <div className="w-full flex-row flex">
            <Plus className="size-6 text-black" />
            <p className="text-black">1</p>
            <Minus className="size-6 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};
