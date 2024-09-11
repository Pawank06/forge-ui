import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

function Hero() {
  return (
    <div className='w-[800px] mx-auto flex flex-col items-center justify-center my-10'>
        <h1 className='text-5xl text-center dark:font-semibold font-bold tracking-tight'>
            Build Your Modern Looking <span className=' font-black'>SaaS</span> Websites Effortlessly.
        </h1>
        <div className='w-[500px] mt-5'>
        <p className='text-center '>Reusable components designed for easy copy-pasting, crafted with Framer Motion and Tailwind CSS</p>
        </div>
        <div className='mt-5'>
            <Link href="/introduction">
            <Button>
            Get Started Now
            </Button>
            </Link>
        </div>
    </div>
  );
}

export default Hero;
