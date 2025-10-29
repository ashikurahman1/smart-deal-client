import React from 'react';
import Container from '../components/Container/Container';
import { MoveLeft } from 'lucide-react';
const CreateAdd = () => {
  return (
    <section className="py-15 bg-base-200 min-h-screen">
      <Container>
        <div className="flex flex-col items-center">
          <button className="btn mb-3">
            <MoveLeft /> Back to Products
          </button>
          <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8">
            Create <span className="gradient-text">an Add</span>
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-xl max-w-4xl mx-auto p-8">
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="">
              <label className="">Title</label>
              <input
                type="text"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
                className="input w-full mt-2"
              />
            </div>
            <div className="">
              <label className="">Category</label>
              <select
                defaultValue="Pick a color"
                className="select w-full mt-2"
              >
                <option disabled={true}>Select a Category </option>
                <option>Crimson</option>
                <option>Amber</option>
                <option>Velvet</option>
              </select>
            </div>
            <div className="">
              <label className="">Min Price You want to Sale ($)</label>
              <input
                type="text"
                placeholder="e.g. 18.5"
                className="input w-full mt-2"
              />
            </div>
            <div className="">
              <label className="">Max Price You want to Sale ($)</label>
              <input
                type="text"
                placeholder="Optional (default = Min Price)"
                className="input w-full mt-2"
              />
            </div>
            <div className="">
              <label className="">Product Condition</label>
              <div className="mt-2 flex gap-4">
                <div className="">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    defaultChecked
                  />{' '}
                  Brand New
                </div>
                <div className="">
                  <input type="radio" name="radio-1" className="radio" /> Used
                </div>
              </div>
            </div>
            <div className="">
              <label className="">Product Usage time</label>
              <input
                type="text"
                placeholder="e.g. 1 year 3 month "
                className="input w-full mt-2"
              />
            </div>

            <div className="col-span-full">
              <label>Your Product Image URL</label>
              <input
                type="url"
                placeholder="https://..."
                className="input w-full mt-2"
              />
            </div>

            <div className="">
              <label className="">Seller Name</label>
              <input
                type="text"
                placeholder="e.g. Artisan Roasters"
                className="input w-full mt-2"
              />
            </div>
            <div className="">
              <label className="">Seller Email</label>
              <input
                type="email"
                placeholder="leli31955@nrlord.com"
                className="input w-full mt-2"
              />
            </div>
            <div className="">
              <label className="">Seller Contact</label>
              <input
                type="number"
                placeholder="e.g. +1-555-1234"
                className="input w-full mt-2"
              />
            </div>
            <div className="">
              <label className="">Seller Image URL</label>
              <input
                type="url"
                placeholder="https://..."
                className="input w-full mt-2"
              />
            </div>

            <div className="col-span-full">
              <label>Location</label>
              <input
                type="text"
                placeholder="City, Country"
                className="input w-full mt-2"
              />
            </div>
            <div className="col-span-full">
              <label>Simple Description about your Product</label>
              <textarea
                type="url"
                placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning
 guitar is so tough..... "
                className="textarea w-full mt-2"
              />
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default CreateAdd;
