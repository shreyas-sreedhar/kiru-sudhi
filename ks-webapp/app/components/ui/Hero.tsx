import React from "react";
import { cn } from "../../../utils/cn";
import Spotlight from "./Spotlight"

export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          World News, <br /> Summarized.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Paste the Article Link below and let our Natrual Language Processing Algorithm summaize the content for you.
        <br/> <br/>
        </p>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        <span className="text-xs font-thin>"> A small NLP exploration by <a href="rakshith" target="blank">Rakshith Dharmappa </a> & <a href="www.shreyas-sreedhar.com"> Shreyas Sreedhar</a> </span>

        </p>
        <div className="mt-6 flex max-w-md gap-x-4">
          {/* <label htmlFor="email-address" className="sr-only">Email address</label> */}
          {/* <input id="email-address" name="email" type="email" autocomplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email"> */}
          <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div>
      </div>
      
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Summarize
        </button>
  
       
      
      </div>
    </div>
  );
}
