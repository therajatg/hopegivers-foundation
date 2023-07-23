import presidentImage from "@/images/president.jpeg";
import secretaryImage from "@/images/secretary.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-blue-500 py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              About Hope Givers Foundation
            </h1>
            <p className="text-white text-lg">
              Hope Givers Foundation is a social, cultural, economic, and
              rural/urban community development organization dedicated to the
              upliftment of the weaker sections of society. Established in 2022
              as a charitable trust in Jaipur, Rajasthan, we strive to bring
              about positive change and empower marginalized communities.
            </p>
            <div className="mt-8">
              <p className="text-white text-lg">Reg. No: 202201024004756</p>
              <p className="text-white text-lg">
                80G Reg. No: AACTH6216KF20221
              </p>
              <p className="text-white text-lg">CSR Reg. No: CSR00032050</p>
            </div>
          </div>
        </div>
      </section>

      {/* President and Secretary section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <Image
                  src={presidentImage}
                  alt="President"
                  className="rounded-full w-64 h-64 mx-auto mb-4 object-cover"
                />

                <h3 className="text-lg font-semibold mb-2">
                  President - Mr. Dheeraj Sharma
                </h3>
                <p>
                  Mr. Dheeraj is a dedicated individual with a passion for
                  community development and social welfare. With years of
                  experience in the nonprofit sector, he leads Hope Givers
                  Foundation with compassion and a strong commitment to
                  improving the lives of those in need.
                </p>
              </div>
              <div className="md:w-1/2 p-4">
                <Image
                  src={secretaryImage}
                  alt="Secretary"
                  className="rounded-full w-64 h-64 mx-auto mb-4 object-cover object-top"
                />

                <h3 className="text-lg font-semibold mb-2">
                  Secretary - Miss Diksha
                </h3>
                <p>
                  Miss Diksha is a dedicated advocate for social justice and
                  equality. With her exceptional organizational skills and
                  passion for making a difference, she plays a crucial role in
                  the day-to-day operations of Hope Givers Foundation and
                  ensures its programs and initiatives are executed effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donations section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Donations and Tax Benefits
            </h2>
            <p className="text-lg mb-8">
              Donations to Hope Givers Foundation can make a significant impact
              on the lives of those in need. As an eligible charitable
              institution, we provide tax benefits to donors under Section 80G
              of the Income Tax Act, 1961. By donating to us, taxpayers can
              claim deduction of 50% of the donated amount, helping them save on
              taxes while supporting our initiatives.
            </p>
            <p className="text-lg">
              Your generous contributions enable us to continue our work and
              make a difference in the lives of the less fortunate. Together, we
              can bring hope and create a brighter future for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
