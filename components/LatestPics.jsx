"use client";

import { getImages } from "@/sanity/sanity-utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export const revalidate = 0;

export const LatestPics = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const images = await getImages();
      setImages(images);
    })();
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-x-8 gap-y-12 mb-12">
      {images?.map(({ url, dimension }) => (
        <Image
          src={url}
          width={dimension.width / 3}
          height={dimension.height / 3}
          style={{ objectFit: "contain" }}
          alt="dew"
        />
      ))}
    </div>
  );
};
