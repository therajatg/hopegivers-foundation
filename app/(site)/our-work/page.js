import oldAgeHomeImage from "@/images/oldAge.jpeg";
import blanketsDistributionImage from "@/images/blanket.jpeg";
import medicalEquipmentsImage from "@/images/medical.jpeg";
import Image from "next/image";

const OurWork = () => {
  console.log("token", process.env.sanity);
  return (
    <div>
      {/* Old Age Homes section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Old Age Homes</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <Image
                  src={oldAgeHomeImage}
                  alt="Old Age Home"
                  className="w-full h-auto mb-4"
                />
              </div>
              <div className="md:w-1/2 p-4">
                <p>
                  At Hope Givers Foundation, we are committed to providing a
                  safe and caring environment for the elderly. Our old age homes
                  offer free-of-cost accommodation, nutritious meals, medical
                  assistance, and other support services to elderly individuals
                  in need. We believe in giving them the love, respect, and care
                  they deserve during their golden years.
                </p>
                <p>
                  Our dedicated staff and volunteers work tirelessly to ensure
                  that the elderly residents receive the highest quality of care
                  and support. We strive to create a homely atmosphere where
                  they can enjoy a sense of belonging and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blankets Distribution section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Blankets Distribution</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <p>
                  As part of our commitment to help vulnerable individuals
                  during the cold winter months, we organize blankets
                  distribution drives. We distribute warm blankets to homeless
                  individuals, elderly people, and families in need. The
                  blankets provide much-needed warmth and comfort, helping them
                  cope with the harsh weather conditions.
                </p>
              </div>
              <div className="md:w-1/2 p-4">
                <Image
                  src={blanketsDistributionImage}
                  alt="Blankets Distribution"
                  className="w-full h-auto mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Equipments section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Medical Equipments</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <Image
                  src={medicalEquipmentsImage}
                  alt="Medical Equipments"
                  className="w-full h-auto mb-4"
                />
              </div>
              <div className="md:w-1/2 p-4">
                <p>
                  We understand the importance of access to proper medical
                  equipment for individuals who cannot afford them. Through our
                  initiatives, we provide essential medical equipment free of
                  cost to those in need. This includes items such as
                  wheelchairs, crutches, walking aids, and more.
                </p>
                <p>
                  Our aim is to improve the quality of life for individuals with
                  mobility issues or other medical conditions by enabling them
                  to have the necessary equipment for their daily activities and
                  mobility. We work closely with medical professionals and
                  partner organizations to identify individuals who would
                  benefit from our assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
