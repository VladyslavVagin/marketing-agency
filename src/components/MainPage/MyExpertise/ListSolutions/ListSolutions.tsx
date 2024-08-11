"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import { FaLaptopCode, FaSitemap } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import CardExpertise from "../CardExpertise/CardExpertise";
import { variantSlider } from "@/animation/MainPage/expertise";
import Slider from "@/components/Slider/Slider";

const ListSolutions = () => {
  const t = useTranslations("HomePage");

  const solutions = [
    {
      Icon: FaLaptopCode,
      title: "Web App",
      description: t("textWebapps"),
    },
    {
      Icon: FaSitemap,
      title: t("webpages"),
      description: t("textWebpages"),
    },
    {
      Icon: AiFillApi,
      title: "REST APIs",
      description: t("textRestApis"),
    },
  ];

  return (
    <motion.div
      className="relative mt-14"
      variants={variantSlider}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Slider className="flex flex-col items-center gap-4 max-w-[370px] md:max-w-[768px] xl:max-w-[1280px]">
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
        className="absolute top-[-40px] right-[-10px] xl:right-[-40px] xl:top-[-60px]"
      />
    </motion.div>
  );
};

export default ListSolutions;
