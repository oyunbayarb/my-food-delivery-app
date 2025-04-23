import {SeeAllFoodsPage} from "@/mainComponents";
import {FoodCategoriesList} from "@/mainComponents/elements";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <img
          src="./Image-bg.png"
          className="rounded-3xl w-full h-[570px]"
        ></img>
        <FoodCategoriesList />
        <div className="flex-wrap flex gap-2 size-fit">
          <SeeAllFoodsPage />
        </div>
      </div>
    </div>
  );
}
