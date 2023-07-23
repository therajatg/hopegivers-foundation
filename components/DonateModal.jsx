import barcode from "@/images/barcode.jpeg";
import Image from "next/image";

export const DonateModal = ({ modal, setModal }) => {
  return (
    <div className="flex justify-center">
      {modal && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-60"
          onClick={() => setModal(false)}
        ></div>
      )}
      <div
        className={`self-center flex flex-col items-center ${
          modal &&
          "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        }`}
      >
        <Image
          src={barcode}
          alt="barcode"
          height={500}
          className="self-center justify-self-center"
        />
      </div>
    </div>
  );
};
