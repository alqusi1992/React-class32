import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonDogs from "./ButtonDogs";
import DogPhotos from "./DogPhotos";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogPhotos(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDogPhoto();
  }, []);

  return (
    <div>
      <ButtonDogs getDogPhoto={getDogPhoto} />
      <DogPhotos dogPhotos={dogPhotos} />
    </div>
  );
}

export default DogGallery;
