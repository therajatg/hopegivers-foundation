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
