"use client";

import { FC, useRef } from "react";
import { Autoplay, Navigation, EffectFlip } from "swiper/modules";
import { Swiper } from "swiper/react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Slider: FC<Props> = ({ children, className }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Swiper
      spaceBetween={50}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      loop={true}
      effect="flip"
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper: any) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      modules={[Autoplay, Navigation, EffectFlip]}
      className={className}

    >
      {children}
      <div ref={navigationPrevRef} className="absolute top-[-54px] right-12 z-20">
        <IoIosArrowDropleft className="w-12 h-12 fill-black" />
      </div>
      <div ref={navigationNextRef} className="absolute top-[-54px] right-0 z-20">
        <IoIosArrowDropright className="w-12 h-12 fill-black" />
      </div>
    </Swiper>
  );
};

export default Slider;
