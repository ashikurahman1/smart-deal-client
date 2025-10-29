import React from 'react';
import { Search } from 'lucide-react';
const Hero = () => {
  return (
    <div className="py-20 px-4 hero-bg">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-5xl lg:text-7xl mb-5 leading-tight">
          Deal your <span className="gradient-text">Products</span> in a{' '}
          <span className="gradient-text">Smart</span> way !
        </h1>
        <p className="text-[#627382]">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>
        {/* Search Bar */}
        <div className="my-6 flex justify-center items-center w-full hover:-translate-y-1.5 transition">
          <input
            className="p-3 rounded-l-full bg-white shadow-md hover:shadow-xl transition-all flex-1 "
            type="text"
            placeholder="search For Products, Categories"
          />
          <button className="gradient-bg p-3 rounded-r-full text-white cursor-pointer shadow-md hover:shadow-xl transition-all">
            <Search />
          </button>
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-5 flex gap-5">
          <button className="gradient-bg p-4  font-semibold text-base-100 rounded-md cursor-pointer ">
            Watch All Adds
          </button>
          <button className="border-2 border-purple-600 rounded-md p-[14px] font-semibold cursor-pointer gradient-text ">
            Post an Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
