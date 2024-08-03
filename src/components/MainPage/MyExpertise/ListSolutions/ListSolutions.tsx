"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { solutions } from "@/data/solutions";
import CardExpertise from "../CardExpertise/CardExpertise";
import Slider from "@/components/Slider/Slider";

const ListSolutions = () => {
  return (
    <div className="relative mt-14">
      <Slider className="flex flex-col items-center gap-4">
        {solutions.map((solution, index) => (
          <SwiperSlide key={index}>
            <CardExpertise solution={solution} />
          </SwiperSlide>
        ))}
      </Slider>
      <Image
        src="/images/hero/shape.png"
        alt="Shape for decoration"
        width={176}
        height={176}
        className="absolute top-0 right-0"
      />
    </div>
  );
};

export default ListSolutions;
