import React from 'react';
import Container from '../components/Container/Container';
import Card from '../components/Card/Card';

const MyBids = () => {
  return (
    <section className="py-15 bg-base-200 min-h-screen">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8">
            My Bids: <span className="gradient-text">10</span>
          </h2>

          <div className="bg-white p-2 rounded-md overflow-x-auto">
            <table className="table">
              <thead className="bg-base-200">
                <tr>
                  <th>SL No</th>
                  <th>Product</th>
                  <th>Seller</th>
                  <th>Bid Price</th>
                  <th>Status</th>

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
                  <td className="">
                    <p className="bg-yellow-500 rounded-full px-2 py-1 max-w-18">
                      Pending
                    </p>
                  </td>
                  <td>
                    <div className="">
                      <button className="btn btn-sm btn-outline btn-error">
                        Remove Bid
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
                  <td className="">
                    <p className="bg-yellow-500 rounded-full px-2 py-1 max-w-18">
                      Pending
                    </p>
                  </td>
                  <td>
                    <div className="">
                      <button className="btn btn-sm btn-outline btn-error">
                        Remove Bid
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

export default MyBids;
