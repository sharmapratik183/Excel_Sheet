import React, { useState } from "react";
import "./Excel.css";

const Excel = () => {
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    const url = URL.createObjectURL(selectedFile);

    window.open(url, "_blank");
  };

  return (
    <div>
      <button className="btn" onClick={() => document.getElementById("fileInput").click()}>
        Upload Excel File
      </button>
      <input
        id="fileInput"
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Excel;


