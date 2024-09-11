import Hero from "@/components/home/hero";


export default function Home() {
  return (
    <div className="lg:w-[1400px] mx-auto px-6 py-4 flex flex-col items-center justify-center my-20">
      <div className="px-3 py-1 border rounded-xl text-sm shadow-inner dark:shadow-zinc-200/5 dark:bg-zinc-900">
          Version 1.0 is here
      </div>
      <div>
        <Hero/>
      </div>
    </div>
  )
}