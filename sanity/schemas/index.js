import gallery from "./gallery-schema";

const schemas = [gallery];
export default schemas;

// *[_type == "gallery"]{
//   "images": images[].asset->url
// }
