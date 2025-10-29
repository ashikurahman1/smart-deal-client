import React from 'react';
import Container from '../components/Container/Container';

const MyAdds = () => {
  return (
    <section className="py-15 bg-base-200 min-h-screen">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8">
            My Adds: <span className="gradient-text">10</span>
          </h2>

          <div className="bg-white p-2 rounded-md overflow-x-auto">
            <table className="table">
              <thead className="bg-base-200">
                <tr>
                  <th>SL No</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>1</td>
                  <td>
                    <img src="" alt="" className="bg-base-200 h-10 w-15" />
                  </td>
                  <td>Orange Juice</td>
                  <td>Beverage</td>
                  <td>$100</td>
                  <td className="">
                    <p className="bg-yellow-500 rounded-full px-2 py-1 max-w-18">
                      Pending
                    </p>
                  </td>
                  <td>
                    <div className="flex gap-2 pr-3">
                      <button className="btn btn-sm border-purple-600 gradient-text">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline btn-error">
                        Delete
                      </button>
                      <button className="btn btn-sm btn-outline btn-success">
                        Make Sold
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td>1</td>
                  <td>
                    <img src="" alt="" className="bg-base-200 h-10 w-15" />
                  </td>
                  <td>Orange Juice</td>
                  <td>Beverage</td>
                  <td>$100</td>
                  <td className="">
                    <p className="bg-yellow-500 rounded-full px-2 py-1 max-w-18">
                      Pending
                    </p>
                  </td>
                  <td>
                    <div className="flex gap-2 pr-3">
                      <button className="btn btn-sm border-purple-600 gradient-text">
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline btn-error">
                        Delete
                      </button>
                      <button className="btn btn-sm btn-outline btn-success">
                        Make Sold
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

export default MyAdds;
