import {OneFoodCard} from "../elements";

export const detailFoodPage = ({
  foodCategoryName,
}: {
  foodCategoryName: string;
}) => {
  return (
    <div className="flex-col flex gap-3">
      <p className="text-white font-semibold text-[30px]">{foodCategoryName}</p>
      <div className="flex gap-2">
        <OneFoodCard></OneFoodCard>
      </div>
    </div>
  );
};
