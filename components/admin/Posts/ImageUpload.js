import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = (props) => {
  const [image, setImage] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
      props.onChange(acceptedFiles[0]);
    },
  });
  const handleDelete = () => {
    setImage(null);
    props.onChange(null);
  };

  return (
    <div
      className="border rounded-md shadow-sm p-4 bg-white "
      {...getRootProps()}
    >
      <input className="hidden" {...getInputProps()} />
      {image ? (
        <div className="relative">
          <img
            className="w-full h-64 object-cover object-center"
            src={URL.createObjectURL(image)}
            alt="Uploaded image"
          />
          <button
            className="absolute top-0 right-0 h-6 w-6 bg-red-500 text-xs text-white rounded-full hover:bg-red-600"
            onClick={handleDelete}
          >
            X
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center h-60 p-4">
          <p className="text-gray-500 text-xs ">
            Drag 'n' drop an image here, or click to select an image
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
