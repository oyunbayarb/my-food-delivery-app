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
    <div className="flex min-w-[200px] min-h-[150px] rounded-lg bg-white p-4 flex-col gap-3">
      <img
        className="w-full min-h-[100px] rounded-2xl object-cover"
        src={imageSrc}
      ></img>

      <div className="flex justify-between w-full flex-col gap-2">
        <div className="flex-row flex justify-between">
          <p className="text-red-700 font-semibold text-[12px]">{foodTitle}</p>
          <p className="text-black font-semibold text-[12px]">${foodPrice}</p>
        </div>
        <p className="text-[16px]">{foodIngredients}</p>
      </div>
    </div>
  );
};
