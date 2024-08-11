"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { contactSchema } from "@/schemas/schemas";
import { paytoneOne } from "@/app/[locale]/layout";
import { variantOpacity } from "@/animation/MainPage/contact";

const ContactForm = () => {
  const t = useTranslations("HomePage");
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(contactSchema), mode: "onBlur" });

  const onSubmit = async () => {
    try {
      if (formRef.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_SERVICE_TEMPLATE!,
          formRef.current,
          process.env.NEXT_PUBLIC_SERVICE_KEY
        );
        toast.success(t("sendMessageSuccess"));
        reset();
      } else {
        toast.error(t("sendMessageError"));
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(t("sendMessageError"));
    }
  };

  return (
    <motion.div
      className="w-[286px] px-7 pt-10 pb-12 bg-white rounded-2xl shadow-xl mx-auto xl:w-[470px]"
      variants={variantOpacity}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h3
        className={`${paytoneOne.className} text-2xl text-black font-normal mb-4`}
      >
        {t("wantCollaboration")}
      </h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="w-[228px] flex flex-col items-center gap-4 xl:w-[400px]"
      >
        <label className="w-full">
          <input
            type="text"
            {...register("name")}
            placeholder={t("name")}
            className="w-full h-12 rounded-xl outline-none focus-within:border-accent border border-gray-300 px-4 py-2 text-lg text-gray-500 font-light"
          />
          {errors.email && (
            <p className="text-[10px] text-red-800 mb-[-16px]">
              {errors?.name?.message}
            </p>
          )}
        </label>
        <label className="w-full">
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="w-full h-12 rounded-xl outline-none focus-within:border-accent border border-gray-300 px-4 py-2 text-lg text-gray-500 font-light"
          />
          {errors.email && (
            <p className="text-[10px] text-red-800 mb-[-16px]">
              {errors?.email?.message}
            </p>
          )}
        </label>
        <label className="w-full">
          <textarea
            {...register("message")}
            placeholder={t("message")}
            className="w-full h-28 rounded-xl outline-none focus-within:border-accent border border-gray-300 px-4 py-2 text-lg text-gray-500 font-light"
          />
          {errors.email && (
            <p className="text-[10px] text-red-800">
              {errors?.message?.message}
            </p>
          )}
        </label>
        <button
          type="submit"
          aria-label={t("submitAriaLabel")}
          className="w-full h-12 rounded-xl bg-accent outline-none text-white text-base font-bold transition-colors duration-500 xl:hover:bg-yellowIcon xl:hover:text-black"
        >
          {t("submit")}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
