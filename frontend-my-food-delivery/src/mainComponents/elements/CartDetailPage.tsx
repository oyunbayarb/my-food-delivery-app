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
        <div className="flex w-full flex-col gap-2">
          <p className="text-red-500">Sunshine Stackers</p>
          <p className="text-black text-[10px]">
            Fluffy pancakes stacked with fruits, cream, syrup, and powdered
            sugar.
          </p>
          <div className="flex-row flex items-center text-black gap-2">
            <Plus />
            <p className="text-[20px]">1</p>
            <Minus />
          </div>
        </div>
      </div>
    </div>
  );
};
