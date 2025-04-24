// "use client";
// import {useEffect, useState} from "react";
// import {OneFoodCard} from "../elements";
// import {axiosInstance} from "@/lib/utils";

// export const oneCategoryFoodPage = ({
//   foodCategoryName,
// }: {
//   foodCategoryName: string;
// }) => {
//   const [oneCategoryFoodPage, setOneCategoryFoodPage] = useState([]);
//   const fetchoneCategoryFoodPage = async () => {
//     const res = await axiosInstance.get(`/byCategory/categoryId`);
//     setOneCategoryFoodPage(res.data.foodsByCategory);
//   };

//   useEffect(() => {
//     fetchoneCategoryFoodPage();
//   }, []);

//   return (
//     <div className="flex-col flex gap-3">
//       {oneCategoryFoodPage.map(() => {
//         return (
//           <div key={index}>
//             <p className="text-white font-semibold text-[30px]">
//               {foodCategoryName}
//             </p>
//             <OneFoodCard
//               foodTitle={value.foodName}
//               foodPrice={value.price}
//               foodIngredients={value.ingredients}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };
