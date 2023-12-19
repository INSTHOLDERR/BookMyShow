import React, { useState } from 'react';
import axios from 'axios';

function Addmovies() {
  const [image, setImage] = useState(null);
  const [moviename, setMoviename] = useState('');

  const uploadHandler = async (event) => {
    event.preventDefault();

    if (!image || !moviename) {
      alert('Please select an image and enter a movie name.');
      return;
    }

    try {
      const base64image = await convertToBase64(image);

      const response = await axios.post('http://localhost:3000/upload', {
        moviename: moviename,
        image: base64image
      });

      alert("Registered successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const changeImg = (event) => {
    const selectedImage = event.target.files[0];
    convertToBase64(selectedImage)
      .then(base64image => {
        setImage(base64image);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <img src={image} alt="preview_image" id="img" />
      <form onSubmit={uploadHandler}>
        <input type="file" name="image" id="" accept=".image/*" onChange={changeImg} />
        <input type="text" name="moviename" id="moviename" placeholder="moviename" onChange={(e) => setMoviename(e.target.value)} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Addmovies;
