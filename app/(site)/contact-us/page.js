import { ContactForm } from "@/components/ContactForm";
import { postContactForm } from "@/sanity/sanity-utils";

const ContactUs = () => {
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
                <ContactForm />
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
    </section>
  );
};

export default ContactUs;
