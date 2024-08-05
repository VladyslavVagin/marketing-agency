"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { contactSchema } from "@/schemas/schemas";
import { paytoneOne } from "@/app/layout";

const ContactForm = () => {
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
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }

  };

  return (
    <div className="w-[286px] px-7 pt-10 pb-12 bg-white rounded-2xl shadow-xl">
      <h3
        className={`${paytoneOne.className} text-2xl text-black font-normal mb-4`}
      >
        Want a collaboration?
      </h3>
      <form ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="w-[228px] flex flex-col items-center gap-4"
      >
        <label className="w-full">
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
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
            placeholder="Message"
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
          className="w-full h-12 rounded-xl bg-accent outline-none text-white text-base font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
