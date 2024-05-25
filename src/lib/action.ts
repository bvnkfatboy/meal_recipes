import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
const apiMeal = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1"
});


export const getMealsByCategory = (category: string) => {
  return apiMeal.get(`/filter.php?c=${category}`);
};

export const getMealsByIngredient = (ingredient: string) => {
  return apiMeal.get(`/filter.php?i=${ingredient}`);
};

export const getDetailMeal = (id: string) => {
  return apiMeal.get(`/lookup.php?i=${id}`);
};

export const searchMeals = (searchValue: string) => {
  return apiMeal.get(`/search.php?s=${searchValue}`);
};

//Ingredient
export const getIngredientList = () => {
  return apiMeal.get("/list.php?i=list");
};

//Category
export const getCategoryList = () => {
  return apiMeal.get("/categories.php");
};

// import { DataService } from '@/config/dataService';

// // Meals
// export const searchMeals = async (searchValue: string) => {
//     try {
//         const { data } = await DataService.get(`www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
//         return data;
//       } catch (error) {
//         console.log('error', error);
//       }
// }
// export const getDetailMeal = async (id: string) => {
//     try {
//         const { data } = await DataService.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//         return data;
//       } catch (error) {
//         console.log('error', error);
//       }
// }
// export const getMealsByCategory = async (category: string) => {
//     try {
//         const { data } = await DataService.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
//         return data;
//       } catch (error) {
//         console.log('error', error);
//       }
// }

// export const getMealsByIngredient = async (ingredient: string) => {
//     try {
//         const { data } = await DataService.get(`www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
//         return data;
//       } catch (error) {
//         console.log('error', error);
//       }
// }

// export const getIngredientList = async () => {
//     try {
//         const { data } = await DataService.get(`www.themealdb.com/api/json/v1/1/list.php?i=list`);
//         return data;
//       } catch (error) {
//         console.log('error', error);
//       }
// }

// export const getAreaList = async () => {
//     try {
//         const { data } = await DataService.get(`www.themealdb.com/api/json/v1/1/list.php?a=list`);
//         return data;
//       } catch (error) {
//         console.log('error', error);
//       }
// }


// export const getFilterByArea = async (area: string) => {
//     try {
//         const { data } = await DataService.get(`www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
//         return data;
//       } catch (error) {
//         console.log('error', error);
//       }
// }


// // Category
// export const getCategoryList = async () => {
//     try {
//         const { data } = await DataService.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
//         return data;
//       } catch (error) {
//         console.log('error', error);
//       }
// }