"use client";
import Autoplay from 'embla-carousel-autoplay';
import React, { useEffect, useState } from 'react';

import DrawPoster from '@/components/shares/drawposters';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';



const imgPoster = [
    '/images/Carousel1.jpg',
    '/images/Carousel2.jpg',
    '/images/Carousel3.jpg',
]

function CarouselPoster() {
  return (
    <>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="">
        {imgPoster.map((item, index) => (
            <CarouselItem className="basis-1/1">
           
                <DrawPoster src={item} key={index} />
            </CarouselItem>
            ))}

        </CarouselContent>
      </Carousel>
    </>
  )
}

export default CarouselPoster