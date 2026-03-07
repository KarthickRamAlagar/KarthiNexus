"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function TechCarousel({ techData = {}, className = "" }) {
  const renderCarousel = (title, items) => {
    const autoplay = Autoplay({
      delay: 1500,
      stopOnInteraction: true,
    });

    return (
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[autoplay]}
          onMouseEnter={() => autoplay.stop()}
          onMouseLeave={() => autoplay.play()}
        >
          <CarouselContent className="gap-4 px-4 md:px-8 mt-4">
            {items.map((tech, i) => (
              <CarouselItem
                key={i}
                className="
                  flex justify-center items-center
                  basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6
                "
              >
                <div className="flex flex-col items-center">
                  <div className="border border-black-300 bg-black-200 rounded-lg p-6 flex items-center justify-center w-32 md:w-36 lg:w-40">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-12 md:h-16 lg:h-20 object-contain"
                    />
                  </div>

                  <p className="text-sm mt-3 text-white font-medium text-center">
                    {tech.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  };

  return (
    <div className={`w-full ${className}`}>
      {renderCarousel("Languages", techData.languages || [])}
      {renderCarousel("Libraries / Frameworks", techData.frameworks || [])}
      {renderCarousel("Tools", techData.tools || [])}
    </div>
  );
}
