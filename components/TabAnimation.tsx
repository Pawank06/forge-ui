'use client'

import React, {useRef } from 'react'
import { AnimationControls, motion, useAnimation } from 'framer-motion'

const TabAnimation = () => {
  const controls = useAnimation();

  const handleMouseLeave = () => {
    controls.start({ opacity: 0 });
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <ul
        onMouseLeave={handleMouseLeave}
        className='relative border-2 mx-auto dark:bg-stone-950 border-black dark:border-stone-700 px-1 py-1 rounded-full flex items-center font-semibold'
      >
        <Tab controls={controls}>PRICING</Tab>
        <Tab controls={controls}>PRODUCTS</Tab>
        <Tab controls={controls}>FEATURES</Tab>
        <Tab controls={controls}>DOCS</Tab>
        <Tab controls={controls}>BLOG</Tab>
        <Cursor controls={controls} />
      </ul>
    </div>
  )
}

export default TabAnimation;

const Tab = ({ children, controls }: { children: React.ReactNode, controls: AnimationControls }) => {
  const ref = useRef<null | HTMLLIElement>(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;

    const { width } = ref.current.getBoundingClientRect();

    controls.start({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base'
    >
      {children}
    </li>
  );
};

const Cursor = ({ controls }: { controls: AnimationControls }) => {
  return (
    <motion.li
      animate={controls}
      className='absolute z-0 h-7 rounded-full dark:bg-stone-800 bg-black md:h-12'
    />
  );
};
