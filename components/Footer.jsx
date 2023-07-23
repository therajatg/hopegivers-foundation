"use client";

import logo from "@/images/footer-logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start max-w-2xl">
          <Image
            src={logo}
            alt="Hope Givers Foundation"
            className="mb-4"
            height={70}
          />
          <p className="text-sm">
            Hope Givers Foundation is a registered charitable trust based in
            Jaipur, Rajasthan. We are dedicated to empowering the weaker
            sections of society through social, cultural, and economic
            development initiatives.
          </p>
          <p className="text-sm">Reg. No: 202201024004756</p>
          <p className="text-sm">80G Reg. No: AACTH6216KF20221</p>
          <p className="text-sm">CSR Reg. No: CSR00032050</p>
        </div>
        <div className="text-center md:text-left mt-6 md:mt-0">
          <p className="text-lg font-semibold">Contact Us</p>
          <p className="text-sm">164/113, Main Haldi Ghati Marg</p>
          <p className="text-sm">Pratap Nagar, Jaipur</p>
          <p className="text-sm">Phone: 9602034848</p>
          <p className="text-sm">Email: hopegiversfoundation99@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
