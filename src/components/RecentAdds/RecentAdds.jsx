import React from 'react';
import Container from '../Container/Container';
import Card from '../Card/Card';

const RecentAdds = () => {
  return (
    <div className="bg-base-200 py-15">
      <Container>
        <h2 className="text-center text-4xl font-bold mb-8">
          Recent <span className="gradient-text">Adds</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center my-8">
          <button className="gradient-bg p-4 px-12   font-semibold text-base-100 rounded-md cursor-pointer ">
            Show All
          </button>
        </div>
      </Container>
    </div>
  );
};

export default RecentAdds;
