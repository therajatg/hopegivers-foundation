import { useEffect, useState } from "react";
import axios from "../axios";
import { CustomAlert } from "../components/CustomAlert";

const ContactUs = () => {
  const [contactDetail, setContactDetail] = useState({});
  const [alert, setAlert] = useState(false);

  const handleContactDetails = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/contacts", {
        contactDetail,
      });
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
      setContactDetail({ name: "", number: "", email: "", message: "" });
    } catch (error) {}
  };

  return (
    <section class="mb-32 text-center">
      <div class="py-12 md:px-12">
        <div class="container mx-auto xl:px-32">
          <p className="text-l font-bold mb-8">
            If you would like to volunteer, visit our facilities, learn more
            about our work, make a donation, or have any questions, please feel
            free to contact us. We are here to help and appreciate your interest
            in supporting our cause.
          </p>
          <div class="grid items-center lg:grid-cols-2">
            <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div class="relative z-[1] block rounded-lg bg-gray-800 px-6 py-12 md:px-12 lg:-mr-14 text-white">
                <h2 class="mb-12 text-3xl font-bold">Contact us</h2>
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
                    onClick={handleContactDetails}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div class="md:mb-12 lg:mb-0">
              <div class="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.9646351538986!2d75.82415597559239!3d26.809254664528645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc90db6bd7df1%3A0xf10c58fc4a7b99a4!2sAshirvad%20old%20Age%20Home!5e0!3m2!1sen!2sin!4v1687960888244!5m2!1sen!2sin"
                  class="absolute left-0 top-0 h-full w-full rounded-lg"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {alert && (
        <CustomAlert
          type="success"
          message="Details Successfully submitted, we'll soon connect with you"
        />
      )}
    </section>
  );
};

export default ContactUs;
