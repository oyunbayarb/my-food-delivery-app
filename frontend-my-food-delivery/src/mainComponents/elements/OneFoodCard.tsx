export const OneFoodCard = ({
  foodTitle,
  foodPrice,
  foodIngredients,
}: {
  foodTitle: string;
  foodPrice: number;
  foodIngredients: string;
}) => {
  return (
    <div className="flex w-[378px] h-[322px] rounded-lg bg-white p-4 flex-col gap-3">
      <img
        className="w-full h-[200px] rounded-2xl object-cover"
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>

      <div className="flex justify-between w-full flex-wrap gap-1">
        <p className="text-red-700 font-semibold text-[18px]">{foodTitle}</p>
        <p className="text-black font-semibold text-[18px]">{foodPrice} tug</p>
        <p className="text-[12px]">{foodIngredients}</p>
      </div>
    </div>
  );
};
