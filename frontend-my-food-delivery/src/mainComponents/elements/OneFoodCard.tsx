import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {CirclePlus, Minus, Plus} from "lucide-react";
import {CircleMinus} from "lucide-react";

export const OneFoodCard = ({
  foodTitle,
  foodPrice,
  foodIngredients,
  imageSrc,
}: {
  foodTitle: string;
  foodPrice: number;
  foodIngredients: string;
  imageSrc: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="flex min-w-[150px] min-h-[150px] rounded-lg bg-white p-3 flex-col gap-2">
        <div className="w-full">
          <img className="w-full rounded-2xl object-cover" src={imageSrc}></img>
        </div>
        <div>
          <div className="flex-row flex w-full justify-between">
            <p className="text-red-700 font-semibold text-[16px]">
              {foodTitle}
            </p>
            <p className="text-black font-semibold text-[16px]">${foodPrice}</p>
          </div>
          <div className="flex justify-start">
            <p className="text-[16px]">{foodIngredients}</p>
          </div>
          <button>Add to cart</button>
        </div>
      </DialogTrigger>
      <DialogContent className="flex w-fit h-[412px]">
        <DialogHeader className="w-[100%] h-full flex">
          <DialogDescription className="w-full h-full flex">
            <img
              className="rounded-2xl object-cover flex size-[364px]"
              src={imageSrc}
            ></img>
          </DialogDescription>
        </DialogHeader>
        <DialogHeader className="flex-col flex gap-6 h-full">
          <DialogTitle className="flex-col flex gap-6">
            <p className="text-red-700 font-semibold text-[24px] text-nowrap">
              {foodTitle}
            </p>
          </DialogTitle>
          <p className="text-black  text-[16px]">{foodIngredients}</p>
          <DialogDescription className="flex-row flex gap-10 items-center">
            <div className="flex-col flex">
              <p className="text-black text-nowrap flex text-[24px] font-[600]">
                Total price
              </p>
              <p className="text-black text-[16px]">${foodPrice}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Button>
                <Plus />
              </Button>
              <p className="text-[25px] text-black">1</p>
              <Button>
                <Minus />
              </Button>
            </div>
          </DialogDescription>
          <div className="flex pt-40 justify-center">
            <Button>Add to cart</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
