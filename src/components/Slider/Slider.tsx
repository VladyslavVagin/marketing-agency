"use client";

import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Slider: FC<Props> = ({ children, className }) => {
  return (
    <Swiper
      pagination={{ type: "bullets", clickable: true }}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
      className={className}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
