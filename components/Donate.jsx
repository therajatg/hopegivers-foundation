import barcode from "@/images/barcode.jpeg";
import Image from "next/image";

export const Donate = ({ modal, setModal }) => {
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

        <Image
          src={barcode}
          alt="barcode"
          height={450}
          className="self-center justify-self-center"
        />
      </div>
    </div>
  );
};
