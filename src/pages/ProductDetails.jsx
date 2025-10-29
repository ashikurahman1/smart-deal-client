import React from 'react';
import Container from '../components/Container/Container';
import { MoveLeft } from 'lucide-react';
const ProductDetails = () => {
  return (
    <section className="bg-base-200 min-h-screen py-10 lg:py-20">
      <Container>
        <div className="gap-10 lg:gap-20 flex flex-col-reverse lg:flex-row">
          {/* Left */}
          <div className="space-y-5 w-full lg:flex-5/12">
            <div>
              <div className="bg-base-300 h-80 lg:h-130 max-w-full rounded-xl"></div>
            </div>
            <div className="bg-white rounded-xl p-5">
              <h2 className="font-semibold text-2xl text-[#001931] mb-8">
                Product Description
              </h2>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center font-semibold">
                <p>
                  <span className="gradient-text">Condition</span> : New
                </p>
                <p>
                  <span className="gradient-text">Usage Time </span>: 3 Month
                </p>
              </div>
              <hr className="text-[#969A9D] my-2" />
              <p className="text-[#969A9D]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p className="text-[#969A9D]">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div></div>
          </div>
          {/* Right */}
          <div className="w-full lg:flex-7/12">
            <div className="space-y-5">
              <button className="btn mb-3">
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
            </div>
            <button className="font-semibold lg:text-[20px] w-full my-5 gradient-bg text-base-100 py-3 lg:py-4 rounded-lg cursor-pointer">
              I want Buy This Product
            </button>
          </div>
        </div>
        <div className="mt-15">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#001931]">
            Bids For This Products: <span className="gradient-text">03</span>
          </h2>

          <div className="bg-white rounded-md overflow-x-auto mt-10">
            <table className="table">
              <thead className="bg-base-300">
                <tr>
                  <th>SL No</th>
                  <th>Product</th>
                  <th>Seller</th>
                  <th>Bid Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>1</td>
                  <td>
                    <div className="flex gap-2">
                      <img src="" alt="" className="bg-base-200 h-10 w-15" />
                      <div>
                        <h3>Orange Juice</h3>
                        <p>$22.5</p>
                      </div>
                    </div>{' '}
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <img
                        src=""
                        alt=""
                        className="bg-base-200 h-10 w-15 rounded-full"
                      />
                      <div>
                        <h3>Sara Chen</h3>
                        <p>crafts.by.sara@shop.net</p>
                      </div>
                    </div>
                  </td>

                  <td>$10</td>

                  <td>
                    <div className="space-x-5">
                      <button className="btn btn-sm btn-outline btn-success">
                        Accept Offer
                      </button>
                      <button className="btn btn-sm btn-outline btn-error">
                        Reject offer
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td>1</td>
                  <td>
                    <div className="flex gap-2">
                      <img src="" alt="" className="bg-base-200 h-10 w-15" />
                      <div>
                        <h3>Orange Juice</h3>
                        <p>$22.5</p>
                      </div>
                    </div>{' '}
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <img
                        src=""
                        alt=""
                        className="bg-base-200 h-10 w-15 rounded-full"
                      />
                      <div>
                        <h3>Sara Chen</h3>
                        <p>crafts.by.sara@shop.net</p>
                      </div>
                    </div>
                  </td>

                  <td>$10</td>

                  <td>
                    <div className="space-x-5">
                      <button className="btn btn-sm btn-outline btn-success">
                        Accept Offer
                      </button>
                      <button className="btn btn-sm btn-outline btn-error">
                        Reject offer
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
