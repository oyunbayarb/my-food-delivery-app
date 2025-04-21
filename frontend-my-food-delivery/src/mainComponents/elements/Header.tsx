import {ChevronRight, MapPin, ShoppingCart, User} from "lucide-react";

export const Header = () => {
  return (
    <div className="flex w-full h-[68px] bg-black rounded-lg justify-between p-2">
      <div className="flex items-center">
        <img src="./Logo=Horizon.png"></img>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4 w-full bg-white rounded-4xl h-9">
          <div className="flex flex-row items-center gap-2">
            <MapPin className="text-red-600" />
            <p className="text-red-600">Delivery Address:</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <button className="text-[#71717A]">Add location</button>
            <ChevronRight className="text-[#71717A]" />
          </div>
        </div>

        <div className="flex">
          <button className="flex items-center justify-center w-[36px] h-[36px] bg-white rounded-full">
            <ShoppingCart />
          </button>
        </div>
        <div className="flex">
          <button className="flex items-center justify-center w-[36px] h-[36px] bg-white rounded-full">
            <User />
          </button>
        </div>
      </div>
    </div>
  );
};
