import React from 'react';

const Card = () => {
  return (
    <div className="p-3 rounded-md bg-base-100 space-y-5">
      <img
        src=""
        alt=""
        className="bg-neutral-400 w-full rounded-md h-[276px]"
      />
      <h3 className="font-semibold text-2xl">
        Yamaha Fz Guitar [ Full Fresh Condition ]{' '}
      </h3>
      <p className="gradient-text text-[20px] font-semibold">$55.99-75</p>
      <button className="w-full gradient-text border-2 border-purple-600 p-3 font-semibold cursor-pointer rounded-md">
        View Details
      </button>
    </div>
  );
};

export default Card;
