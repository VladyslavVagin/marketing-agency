"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowCircleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const checkVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercentage = (scrolled / windowHeight) * 100;

    if (scrolled > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setScrollPosition(scrolledPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  const radius = 36;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - scrollPosition / 100 * circumference;

  return (
    isVisible && (
      <motion.div
        className="fixed w-16 h-16 bottom-10 right-6 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <svg
          height={radius * 2}
          width={radius * 2}
          className='absolute'
        >
          <circle
            stroke="blue"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <Link href="#header" className="absolute">
            <FaArrowCircleUp className="w-10 h-10 fill-yellowIcon" />
        </Link>
      </motion.div>
    )
  );
};

export default ButtonUp;