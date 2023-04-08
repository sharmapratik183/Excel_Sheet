import React, { useState } from "react";
import "./Upload.css";
import H1 from "../../Utils/Images/H1.jpg";
import Excel from "../Excel/Excel";
import Image_slider from "../Image_slider/Image_slider";

const Upload = () => {
  const [content, setContent] = useState("");

  const handleInput = (event) => {
    setContent(event.target.value);
  };

  return (
    <>
      <div className="global_container">
        <div className="image_container">
          <Image_slider />
        </div>

        

        <div className="upload_container">
        <div className="whatsapp">
            <p>Write Your WhatsApp Message</p>
        </div>
          <div contentEditable="true" onInput={handleInput} className="editable">
            <p>{content}</p>
          </div>
          <Excel />
        </div>
      </div>
    </>
  );
};

export default Upload;
