import React, { useRef, useState } from "react";
import "./Upload.css";
import H1 from "../../Utils/Images/H1.jpg";

import Image_slider from "../Image_slider/Image_slider";
import Sheet from "../Sheet/Sheet";

const Upload = () => {
  const [content, setContent] = useState("");

  const handleInput = (event) => {
    setContent(event.target.value);
  };

  const divRef = useRef(null);

  function handleFocus(event) {
    // Set the selection range to the beginning of the content
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(divRef.current, 0);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }

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
          <div contentEditable="true" ref={divRef} onFocus={handleFocus} className="editable">
            <p>This div is editable</p>
          </div>
          <Sheet/>
        </div>
      </div>
    </>
  );
};

export default Upload;
