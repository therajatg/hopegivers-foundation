"use client";

import bannerImage from "@/images/banner.jpeg";
import aboutImage from "@/images/about.jpeg";
import ourWorkImage from "@/images/ourWork.jpeg";
import volunteerImage from "@/images/volunteer.jpeg";
import Link from "next/link";
import { Donate, LatestPics } from "@/components";
import Image from "next/image";
import { useModal } from "@/context/context";

const Home = () => {
  const { modal, setModal } = useModal();

  return (
    <div>
      {/* Banner Section */}
      <section className={`${modal ? "static" : "relative"}`}>
        <Image src={bannerImage} alt="Banner" className="w-full h-auto" />
        <div
          className={`${
            modal ? "hidden" : "absolute"
          } inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Welcome to Hope Givers Foundation
          </h1>
          <p className="text-lg text-white text-center mt-4">
            Bringing Hope, Changing Lives
          </p>
          <div className="flex mt-8 space-x-4">
            <Link
              href="/volunteer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            >
              Volunteer with Us
            </Link>
            <button
              onClick={() => setModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              About Hope Givers Foundation
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <p>
                  Hope Givers Foundation is a social, cultural, economic, and
                  rural/urban community development organization dedicated to
                  the upliftment of the weaker sections of society. Registered
                  as a charitable trust in 2022 in Jaipur, Rajasthan, our
                  mission is to bring positive change and empower individuals
                  and communities.
                </p>
                <p>
                  Through our various initiatives and programs, we strive to
                  make a difference in the lives of the less fortunate. From
                  running free old age homes and distributing blankets to
                  providing medical equipment to those in need, our work is
                  driven by compassion and a commitment to creating a better
                  society.
                </p>
              </div>
              <div className="md:w-1/2 p-4">
                <Image src={aboutImage} alt="About" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <Image
                  src={ourWorkImage}
                  alt="Our Work"
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 p-4">
                <p>
                  At Hope Givers Foundation, we are actively involved in three
                  key areas to make a positive impact on society. We run
                  free-of-cost old age homes, where we provide elderly
                  individuals with food, shelter, healthcare, and companionship.
                  We also distribute blankets to the homeless and those in need
                  during colder months to keep them warm and comfortable.
                </p>
                <p className="mb-4">
                  Additionally, we provide medical equipment free of charge to
                  individuals who require assistance in their daily lives. This
                  includes items such as wheelchairs, crutches, and walking
                  aids, enabling them to improve their mobility and overall
                  quality of life.
                </p>
                <Link
                  href="/our-work"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 mt-8 rounded-full transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Get Involved
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <p>
                  If you are passionate about making a difference in the lives
                  of others, we invite you to join our team of dedicated
                  volunteers. Whether you can spare your time, skills, or
                  resources, your contribution can bring about positive change
                  in the community.
                </p>
                <p>
                  To volunteer or to know more about our work, you can contact
                  us by phone or email. We would be happy to provide you with
                  further information and guide you on how you can get involved.
                </p>
              </div>
              <div className="md:w-1/2 p-4">
                <Image
                  src={volunteerImage}
                  alt="Volunteer"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Donation Section */}
      <section className={`bg-gray-100 py-12 ${modal && "hidden"}`}>
        <Donate />
      </section>
      <LatestPics />
      {modal && <Donate />}
    </div>
  );
};

export default Home;
