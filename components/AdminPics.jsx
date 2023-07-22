import { useEffect, useState } from "react";
import axios from "axios";

export const AdminPics = () => {
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const res = await axios.get("/api/images");
    setImages(res.data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await axios.post("/api/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.status === 200) {
        getImages();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (imageName) => {
    const res = await axios.delete(`api/images/${imageName}`);
    if (res.status === 200) getImages();
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler} className="mb-8">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          accept="image/*"
        ></input>
        <br />
        {file && (
          <button
            type="submit"
            className="text-white bg-blue-600 py-1 px-3 border rounded-xl"
          >
            Upload
          </button>
        )}
      </form>
      <div className="flex justify-center flex-wrap gap-x-8 gap-y-12 mb-12">
        {images.map((each) => (
          <div className="relative" key={each.imagename}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 absolute right-0 m-1 hover:cursor-pointer"
              onClick={() => deleteHandler(each.imagename)}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
            <img src={each.imageUrl} className="max-h-80 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
