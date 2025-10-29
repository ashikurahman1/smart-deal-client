import React from 'react';
import Container from '../components/Container/Container';
import { MoveLeft } from 'lucide-react';
const Bid = () => {
  return (
    <section className="bg-base-200 min-h-screen py-10 lg:py-20">
      <Container>
        <div className="gap-10 lg:gap-20 flex flex-col lg:flex-row">
          {/* Left */}
          <div className="space-y-5 w-full lg:flex-5/12">
            <div>
              <button className="btn lg:hidden mb-3">
                <MoveLeft /> Back to Products
              </button>
              <div className="bg-base-300 h-80 lg:h-130 max-w-full rounded-xl"></div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full lg:flex-7/12">
            <div className="space-y-5">
              <button className="hidden btn lg:flex mb-3">
                <MoveLeft /> Back to Products
              </button>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#001931]">
                Yamaha Fz Guitar For Sale
              </h2>
              <div className="bg-purple-100 rounded-full max-w-37 px-3 py-1 font-medium ">
                <p className="gradient-text">Art and Hobbies</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-[#4CAF50] mb-3">
                  $22.5 - 30
                </h2>
                <p className="text-[#001931] text-lg">Price starts from </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-[#001931] mb-3">
                  Seller Information
                </h2>
                <div className="flex gap-3 items-center my-3">
                  <img
                    src=""
                    alt=""
                    className="bg-base-300 rounded-full h-8 w-8"
                  />
                  <div>
                    <p className="font-semibold">Sara Chen</p>
                    <p>crafts.by.sara@shop.net</p>
                  </div>
                </div>
                <p className="text-[#001931] text-[16px] mb-2">
                  <span className="font-semibold">Location:</span>
                  Los Angeles, CA
                </p>
                <p className="text-[#001931] text-[16px]  mb-2">
                  <span className="font-semibold">Contact: </span>
                  sara.chen_contact
                </p>
                <p className="text-[#001931] text-[16px]">
                  <span className="font-semibold">Status: </span>
                  <span className="bg-yellow-500 px-3 py-1 rounded-full">
                    On Sale
                  </span>
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-[#001931] mb-3">
                  Product Details
                </h2>
                <p className="text-[#001931] text-[16px] mb-2">
                  <span className="font-semibold">Product ID: </span>
                  68f753ae2174ca368ec882f4
                </p>
                <p className="text-[#001931] text-[16px]">
                  <span className="font-semibold">Posted: </span>
                  10/19/2024
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() =>
                  document.getElementById('my_modal_5').showModal()
                }
                className="font-semibold lg:text-[20px] w-full my-5 gradient-bg text-base-100 py-3 lg:py-4 rounded-lg cursor-pointer"
              >
                Bid
              </button>
              <button className="font-semibold lg:text-[20px] w-full gradient-text py-3  rounded-lg cursor-pointer border-purple-600 border-2">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </Container>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center mb-5">
            Give Seller Your Offered Price
          </h3>
          <form className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="">
              <label className="">Buyer Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="input w-full mt-2"
              />
            </div>
            <div className="">
              <label className="">Buyer Email</label>
              <input
                type="email"
                placeholder="Your  Email"
                className="input w-full mt-2"
              />
            </div>

            <div className="col-span-full">
              <label className="">Buyer Image URL</label>
              <input
                type="url"
                placeholder="https://...your_img_url"
                className="input w-full mt-2"
              />
            </div>
            <div className="col-span-full">
              <label>Place your Price</label>
              <input
                type="number"
                placeholder="e.g. 500000"
                className="input w-full mt-2"
              />
            </div>
            <div className="col-span-full">
              <label>Contact Info</label>
              <input
                type="number"
                placeholder="e.g. +1-555-1234"
                className="input w-full mt-2"
              />
            </div>
          </form>
          <div className="modal-action">
            <form method="">
              {/* if there is a button in form, it will close the modal */}
              <button className="font-semibold gradient-text rounded-lg cursor-pointer border-purple-600 border-2 px-4 py-3 mr-3">
                Cancel
              </button>
            </form>
            <button className="font-semibold gradient-bg text-base-100  rounded-lg cursor-pointer px-4 py-3">
              Submit Bid
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Bid;
