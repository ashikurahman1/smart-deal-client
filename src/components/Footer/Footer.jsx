import React from 'react';
import Container from '../Container/Container';
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-[#001931] text-base-100">
      <Container>
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-5">
              Smart<span className="gradient-text">Deals</span>
            </h2>
            <p className="text-[#A1A1AA] text-[18px]">
              Your trusted marketplace for authentic local products. Discover
              the best deals from across Bangladesh.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl mb-5">Quick Links</h3>
            <div className="menu">
              <a href="">All Products</a>

              <a href="">Dashboard</a>

              <a href="">Login</a>

              <a href="">Register</a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-xl mb-5">Categories</h3>
            <div className="menu">
              <a href="">Electronics</a>

              <a href="">Fashion</a>

              <a href="">Home & Living</a>

              <a href="">Groceries</a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-xl mb-5">Contact & Support</h3>
            <div className="menu space-y-6">
              <p className="flex gap-3 ">
                <Mail />
                support@Smartdeals.com
              </p>
              <p className="flex gap-3 ">
                <Phone />
                +880 123 456 789
              </p>
              <p className="flex gap-3">
                <MapPin />
                123 Commerce Street, Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-xl mb-8">Social Links</h3>
            <div className="flex gap-5">
              <Twitter className="bg-base-200 rounded-full p-1 text-black size-8" />
              <Linkedin className="bg-base-200 rounded-full p-1 text-black size-8" />
              <Facebook className="bg-base-200 rounded-full p-1 text-black size-8" />
            </div>
          </div>
        </section>
        <hr className="text-[#A1A1AA]" />
        <section className="text-center py-8 text-[#A1A1AA]">
          <p>
            &copy; {new Date().getFullYear()} SmartDeals. All rights reserved.
          </p>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
