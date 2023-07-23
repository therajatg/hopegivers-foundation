import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export const getImages = async () => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "gallery"]{
      "images": images[].asset->{
        "url": url,
        "dimension": metadata.dimensions
      },
    }[0].images`,
    { next: { revalidate: 10 } }
  );
};

export const postContactForm = async ({ name, number, email, message }) => {
  console.log("hahahahahah");
  const client = createClient(clientConfig);
  const newContact = {
    _type: "contact",
    name,
    email,
    number,
    message,
  };

  return client.create(newContact);
};
