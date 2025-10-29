import React from 'react';
import Container from '../components/Container/Container';
import Card from '../components/Card/Card';

const AllAdds = () => {
  return (
    <section className="py-15 bg-base-200 min-h-screen">
      <Container>
        <div>
          <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8">
            All <span className="gradient-text">Adds</span>
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
        </div>
      </Container>
    </section>
  );
};

export default AllAdds;
