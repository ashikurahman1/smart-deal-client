import React from 'react';
import thumbnail from '../../assets/thumbnail-card.png';
const Card = () => {
  return (
    <div className="p-3 rounded-md bg-base-100 space-y-5">
      <img src={thumbnail} alt="" className="w-full h-40" />
      <div className="bg-purple-100 px-3 py-1 rounded-full max-w-20">
        <p className="gradient-text ">On Sale</p>
      </div>
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
