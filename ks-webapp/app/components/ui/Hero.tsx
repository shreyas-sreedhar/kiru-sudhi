"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
// Assuming cn is properly typed or any in your utils, otherwise you need to type it accordingly
import Spotlight from "./Spotlight";

export function Hero() {
  const [url, setUrl] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); 
    try {
      const response = await fetch('./api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSummary(data.summary); 
    } catch (error) {
      console.error('There was an error summarizing the article:', error);
    }
  };

  return (
    <div className="w-full min-h-screen flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          World News, <br /> Summarized.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-l text-center mx-auto">
          Paste the Article Link below and let us summarise the content for you.
          <br /><br />
        </p>

        <div className="mt-4 pt-8 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Paste URL"
                aria-label="Article URL"
                value={url}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                Summarize
              </button>
            </div>
          </form>

          {/* Display summarized text here */}
          {summary && (
            <div className="mt-4 text-neutral-300 text-center">
              <p className="text-lg font-semibold">Summary</p>
              <p>{summary}</p>
            </div>
          )}

          <p className="pt-8 mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            <span className="text-xs font-normal">A small NLP exploration by <a href="rakshith" target="blank" className="text-teal-500 hover:font-bold">Rakshith Dharmappa</a> & <a href="www.shreyas-sreedhar.com" className="text-teal-500 hover:font-bold">Shreyas Sreedhar</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}
