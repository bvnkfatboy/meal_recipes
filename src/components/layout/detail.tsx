import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import SkeletonDetail from '@/components/skeleton/detail';
import { ScrollArea } from '@/components/ui/scroll-area';

import { getDetailMeal } from '@/lib/action';

interface Props {
  id: string;
}
function DetailMeals({ id }: Props) {
  const [meals, setMeals] = useState({} as any);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getDetailMeal(id);
      setMeals(response.data.meals[0]);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <SkeletonDetail />;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div
        className=" rounded-lg  bg-cover bg-no-repeat p-2 md:p-8 lg:p-12"
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.7),

          rgba(0, 0, 0, 0.7)

          ),

          url('${meals?.strMealThumb || meals?.strDrinkThumb}')`,
        }}
      >
        <div className="mx-auto max-w-7xl ">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 lg:gap-12">
            <div className="col-span-1 hidden md:block">
              <img
                src={`${meals?.strMealThumb || meals?.strDrinkThumb}`}
                alt={meals?.strMeal || meals?.strDrink}
                className="h-auto w-full rounded-lg shadow-lg"
                height={600}
                width={400}
              />
            </div>
            <div className="col-span-2">
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {meals?.strMeal || meals?.strDrink}
              </h1>
              <h2 className="my-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">Ingredients</h2>
              {Object.keys(meals)
                .filter((key) => key.startsWith('strIngredient'))
                .map((key, index) => (
                  <p className="text-white" key={index}>
                    {meals[`strMeasure${index + 1}`]} {meals[key]}
                  </p>
                ))}
              <h2 className="my-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">Introduction</h2>
              <p className=" text-white">
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <span className="ms-5"></span>
                  {meals?.strInstructions}
                </ScrollArea>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DetailMeals;
