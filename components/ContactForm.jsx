"use client";

import { postContactForm } from "@/sanity/sanity-utils";
import { useState } from "react";
import { CustomAlert } from "./CustomAlert";

export const ContactForm = () => {
  const [contactDetail, setContactDetail] = useState({});
  const [alert, setAlert] = useState(false);

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      const res = await postContactForm({
        name: contactDetail.name,
        number: contactDetail.number,
        email: contactDetail.email,
        message: contactDetail.message,
      });
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
      setContactDetail({ name: "", number: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-y-6">
        <div className="flex flex-col items-start">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            value={contactDetail.name}
            onChange={(e) =>
              setContactDetail((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
            className="w-full rounded h-8 bg-gray-600 px-1"
            required
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="number">Contact No.</label>
          <input
            type="text"
            id="number"
            placeholder="Enter Number"
            value={contactDetail.number}
            onChange={(e) =>
              setContactDetail((prev) => {
                return { ...prev, number: e.target.value };
              })
            }
            className="w-full rounded h-8 bg-gray-600 px-1"
            required
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={contactDetail.email}
            onChange={(e) =>
              setContactDetail((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
            className="w-full rounded h-8 bg-gray-600 px-1"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            placeholder="Enter your message"
            value={contactDetail.message}
            onChange={(e) =>
              setContactDetail((prev) => {
                return { ...prev, message: e.target.value };
              })
            }
            className="w-full h-32 rounded bg-gray-600 px-1"
          />
        </div>

        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="bg-blue-700 w-full rounded text-white py-1"
          onClick={handleContact}
        >
          Send
        </button>
      </form>{" "}
      {alert && (
        <CustomAlert
          type="success"
          message="Details Successfully submitted, we'll soon connect with you"
        />
      )}
    </div>
  );
};
