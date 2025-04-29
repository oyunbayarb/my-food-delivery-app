"use client";

import {uploadImage} from "@/utils/image-upload";
import {ChangeEvent, useState} from "react";

export const ImageUpload = () => {
  const [file, setFile] = useState<File>();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };
  console.log(file, "file");
  const handleUpload = async (file?: File) => {
    if (!file) {
      console.log("file oruulagui bn");
      return;
    }
    const imageUrL = await uploadImage(file);
    console.log(imageUrL);
  };

  return (
    <div>
      <input
        onChange={handleFileChange}
        className="border-1 w-[100px] h-[20px] bg-white rounded-full"
        type="file"
      ></input>
      <button
        onClick={() => handleUpload(file)}
        className="border-1 w-[500px] h-[20px] bg-white rounded-full"
      >
        Upload
      </button>
    </div>
  );
};
