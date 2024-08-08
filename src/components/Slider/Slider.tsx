"use client";

import { FC, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Slider: FC<Props> = ({ children, className }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={isTablet ? 2 : 1}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper: any) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      modules={[Autoplay, Navigation]}
      className={className}
    >
      {children}
      <div ref={navigationPrevRef} className="absolute bottom-[50%] left-4 z-20">
        <IoIosArrowDropleft className="w-12 h-12 fill-black" />
      </div>
      <div ref={navigationNextRef} className="absolute bottom-[50%] right-4 z-20">
        <IoIosArrowDropright className="w-12 h-12 fill-black" />
      </div>
    </Swiper>
  );
};

export default Slider;
