import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const FoodCategoriesList = () => {
  const foodCategoriesListData = [
    "Appetizers",
    "Salads",
    "Pizzas",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Side dish",
    "Brunch",
    "Desserts",
    "Beverages",
    "Appetizers",
    "Salads",
    "Pizzas",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Side dish",
    "Brunch",
    "Desserts",
    "Beverages",
  ];
  return (
    <div className="flex-col">
      <p className="text-white font-semibold text-[30px]">Categories</p>

      <Carousel className="flex w-full">
        <CarouselContent className="w-fit gap-1 flex p-4 overflow-scroll">
          {foodCategoriesListData.map((value, index) => {
            return (
              <button
                key={index}
                className="bg-white rounded-full min-w-[96px]"
              >
                {value}
              </button>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
