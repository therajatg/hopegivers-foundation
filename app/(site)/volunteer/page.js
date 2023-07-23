const Volunteer = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-blue-500 py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Volunteer with Hope Givers Foundation
            </h1>
            <p className="text-white text-lg mb-8">
              Join us in our mission to make a positive impact on the lives of
              the elderly and those in need.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <a
                href="tel:9602034848"
                className="bg-white text-blue-500 font-semibold px-8 py-3 rounded-lg mx-2 mb-2 md:mb-0 hover:bg-blue-100"
              >
                Call us: 9602034848
              </a>
              <a
                href="mailto:hopegiversfoundation99@gmail.com"
                className="bg-white text-blue-500 font-semibold px-8 py-3 rounded-lg mx-2 hover:bg-blue-100"
              >
                Email us: hopegiversfoundation99@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              How to Get Involved
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Explore Volunteer Opportunities
                </h3>
                <p>
                  At Hope Givers Foundation, we offer a range of volunteer
                  opportunities for individuals who are passionate about making
                  a difference. Our volunteers play a crucial role in supporting
                  our programs and initiatives, and their contributions are
                  highly valued. You can explore various areas where you can get
                  involved, such as:
                </p>
                <ul className="list-disc list-inside mt-4">
                  <li>
                    Assisting at our free old age homes and providing care to
                    the elderly residents
                  </li>
                  <li>
                    Participating in blanket distribution drives during the
                    winter season
                  </li>
                  <li>Supporting fundraising events and activities</li>
                  <li>
                    Contributing your professional skills in areas like
                    healthcare, social work, administration, or marketing
                  </li>
                </ul>
                <p className="mt-4">
                  Whatever your interests, skills, or availability, there is a
                  volunteering opportunity for you at Hope Givers Foundation.
                </p>
              </div>
              <div className="md:w-1/2 p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Contact Us to Volunteer
                </h3>
                <p>
                  Getting involved as a volunteer is easy. If you are interested
                  in volunteering with us or have any questions, please don't
                  hesitate to reach out to us. You can contact us directly by
                  calling us at 9602034848 or sending an email to
                  volunteer@hopegiversfoundation.org. Our team will be happy to
                  provide you with more information, discuss the available
                  opportunities, and guide you through the process of becoming a
                  volunteer.
                </p>
                <p className="mt-4">
                  Volunteering with Hope Givers Foundation is a rewarding
                  experience that allows you to make a meaningful impact on the
                  lives of the elderly and those in need. We look forward to
                  welcoming you to our team of dedicated volunteers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="mb-4 text-center">
              If you have any questions or require further information about
              volunteering with Hope Givers Foundation, please don't hesitate to
              contact us. We appreciate your dedication and willingness to make
              a difference in the lives of those in need.
            </p>
            <div className="flex justify-center sm:flex-row flex-col">
              <a
                href="tel:9602034848"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg mx-2 mb-2 md:mb-0 hover:bg-blue-700"
              >
                Call us: 9602034848
              </a>
              <a
                href="mailto:hopegiversfoundation99@gmail.com"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg mx-2 hover:bg-blue-700"
              >
                Email us: hopegiversfoundation99@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
