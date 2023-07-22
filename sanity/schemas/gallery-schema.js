const gallery = {
  title: "Gallery",
  name: "gallery",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          name: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt", type: "string" }],
        },
      ],
    },
  ],
};

export default gallery;
