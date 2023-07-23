import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export const getImages = async () => {
  const headers = {
    "Cache-Control": "no-store",
  };
  return createClient({ ...clientConfig, headers }).fetch(
    groq`*[_type == "gallery"]{
      "images": images[].asset->{
        "url": url,
        "dimension": metadata.dimensions
      },
    }[0].images`,
    { next: { revalidate: 0, cache: "no-store" } }
  );
};

export const postContactForm = async ({ name, number, email, message }) => {
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
