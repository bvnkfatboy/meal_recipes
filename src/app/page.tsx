'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import DetailMeals from '@/components/layout/detail';
import MainLayout from '@/components/layout/main';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';

import { getCategoryList, getMealsByCategory, searchMeals } from '@/lib/action';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectmealsByCategory, setSelectmealsByCategory] = useState('Beef');
  const [mealsByCategoryList, setMealsByCategoryList] = useState([]);
  const [selectMealsID, setSelectMealsID] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCategoryList().then((response) => {
      setCategoryList(response.data.categories);
    });
  }, []);

  useEffect(() => {
    getMealsByCategory(selectmealsByCategory).then((response) => {
      setMealsByCategoryList(response.data.meals);
    });
  }, [selectmealsByCategory]);

  const handdleSelectCategory = (category: string) => {
    setMealsByCategoryList([]);
    setSelectmealsByCategory(category);
  };

  const searchHandle = useCallback((searchValue: string) => {
    searchMeals(searchValue).then((response) => {
      setMealsByCategoryList([]);
      setMealsByCategoryList(response.data.meals);
    });
  }, []);

  useEffect(() => {
    if (!inputValue) {
      return;
    }
    const timer = setTimeout(() => {
      searchHandle(inputValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleMealsClick = (id: string) => {
    setOpen(true);
    setSelectMealsID(id);
  };
  // const searchHandle = useCallback(meals: string) => {
  //   searchMeals(meals).then((response) => {
  //     setMealsByCategoryList(response.data.meals);
  //   });
  // }
  return (
    <MainLayout>
      <div className="flex justify-center">
        <div className="relative w-full max-w-[500px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <Input
            className="block w-full rounded-lg bg-[#f5f5f5] p-4 pl-10  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="Search..."
            type="search"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Carousel>
          <CarouselContent className="-ml-1 pt-10">
            {categoryList.map((category: any, index) => (
              <CarouselItem key={category.idCategory} className="basis-1/3 pl-1 md:basis-1/5">
                <div className="flex flex-col items-center justify-center text-center" key={index}>
                  <a href="#" className=" " onClick={() => handdleSelectCategory(category.strCategory)}>
                    <Image src={category.strCategoryThumb} alt={category.strCategory} width={100} height={100} />

                    <p className="">{category.strCategory}</p>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div>
        <div className="flex flex-col items-center gap-8 px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {mealsByCategoryList.map((mealsByCategory: any, index) => (
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1, duration: 0.3, ease: 'easeInOut' }}
                viewport={{ amount: 0.5 }}
                key={index}
              >
                <button onClick={() => handleMealsClick(mealsByCategory.idMeal)}>
                  <div className="group relative overflow-hidden rounded-lg">
                    <img
                      alt="Image 1"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      height={341}
                      src={mealsByCategory.strMealThumb}
                      style={{
                        aspectRatio: '341/341',
                        objectFit: 'cover',
                      }}
                      width={341}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-center text-2xl font-bold text-white">{mealsByCategory.strMeal}</h3>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="border-none bg-transparent p-2">
          <motion.div>
            <div className="mt-3">
              <DetailMeals id={selectMealsID} />
            </div>
          </motion.div>
        </DrawerContent>
      </Drawer>
    </MainLayout>
  );
}
