import { useEffect, useState } from 'react';
import { CloudUpload } from "lucide-react"; // Optional icon library
import "../App.css"
import axios from "axios";
function cropDisease(){
   const [selectedImage, setSelectedImage] = useState(null);
   const [prediction, setPrediction] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // const handleDetectClick = () => {
  //   alert("Sending image to backend for disease detection...");s
  // };
  const handleDetectClick = async () => {
  const fileInput = document.getElementById("imageUpload");
  const imageFile = fileInput?.files[0];

  if (!imageFile) {
    alert("Please upload an image first.");
    return;
  }

  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const res = await axios.post("http://localhost:5000/api/detect-disease", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    // alert("Disease Detected: " + res.data.result); 
    setPrediction(res.data.result);
  } catch (error) {
    console.error("Error uploading image:", error);
    alert("Failed to detect disease. Please try again.");
  }
};
  return (
    <>
    <div className="div main_content ">
      <h1>Crop Disease</h1>
      <h3>Upload an image of the leaf to identify the disease</h3>
      <div className="upload-container">
      <label htmlFor="imageUpload" className="upload-box">
        {selectedImage ? (
          <img src={selectedImage} alt="Preview" className="preview-image" />
        ) : (
          <>
            <CloudUpload size={48} strokeWidth={1.5} />
            <p>Choose an image to upload</p>
          </>
        )}
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
      </label>

      <button
        className="detect-button"
        onClick={handleDetectClick}
        disabled={!selectedImage}
        style={{
          opacity: selectedImage ? 1 : 0.5,
          cursor: selectedImage ? "pointer" : "not-allowed",
        }}
      >
        Detect Disease
      </button>

      {prediction && <h3>Result: {prediction}</h3>}
    </div>
    </div>
    </>
  )
}
export default cropDisease;