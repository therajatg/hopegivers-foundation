import { useEffect, useState } from "react";
import axios from "axios";
import logo from "@/images/nav-logo.png";

export const Donate = ({ modal, setModal }) => {
  const [donationAmount, setDonationAmount] = useState();
  const [error, setError] = useState("");
  const amountOptions = [1000, 5000, 10000, "Custom"];

  const changeHandler = (e) => {
    const value = parseInt(e.target.value);
    if (value < 1) {
      setError("Amount must be greater than or equal to 1");
    } else {
      setError("");
      setDonationAmount(value);
    }
  };

  const checkoutHandler = async () => {
    if (parseInt(donationAmount) >= 1) {
      const {
        data: { key },
      } = await axios.get("/api/payment/getkey");

      const {
        data: { order },
      } = await axios.post("/api/payment/checkout", {
        donationAmount,
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Hope Givers Foundation",
        description: "Old Age Home For Eldrely",
        image: logo,
        order_id: order.id,
        callback_url: "http://localhost:5000/api/payment/paymentverification",
        redirect: true,
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
      setDonationAmount("");
    } else {
      setError("Enter valid amount");
    }
  };

  return (
    <div className="flex justify-center">
      {modal && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60"
          onClick={() => setModal(false)}
        ></div>
      )}
      <div
        className={`self-center	mb-20 flex flex-col gap-y-5 items-center border rounded-xl p-8 bg-gray-900 text-white sm:w-[60%] ${
          modal &&
          "fixed top-[50%] left-[50%] h-fit w-full translate-x-[-50%] translate-y-[-50%]"
        }`}
      >
        {modal && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 absolute right-0 top-0 mr-2 mt-2 hover:cursor-pointer"
            onClick={() => setModal(false)}
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        )}
        <h1 className="text-xl font-bold">Make a Donation</h1>
        <p>
          Your generous contributions can help us continue our important work
          and make a lasting impact on the lives of those in need. As a
          registered charitable trust, your donations are tax exempted under
          Section 80G of the Income Tax Act, 1961.
        </p>
        {error.length > 0 && <span className="text-red-500">{error}</span>}
        <div className="w-full relative flex items-center">
          <span className="absolute pl-3">₹</span>
          <input
            type="number"
            id="last_name"
            className="pl-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter amount"
            value={donationAmount}
            onChange={changeHandler}
            min={0}
            required
          />
        </div>
        <div className="hidden sm:block">
          {amountOptions.map((item, index) => (
            <button
              key={index}
              type="button"
              className="mx-4 mb-2 text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => setDonationAmount(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={checkoutHandler}
          to="/donate"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};
