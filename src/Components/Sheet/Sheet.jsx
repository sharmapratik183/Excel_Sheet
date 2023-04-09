import React, { useState } from "react";
import "./Sheet.css";
import { S3 } from "aws-sdk";

const s3 = new S3({
  accessKeyId: "AKIAQ7KCSWGNCNHKV67E",
  secretAccessKey: "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",
  region: "us-east-1",
});

const Sheet = () => {
  const [file, setFile] = useState(null);

  function uploadFileToS3(file, folderName, fileName) {
    const params = {
      Bucket: "freebucketis",
      Key: `${folderName}/${fileName}`,
      Body: file,
      ContentType: file.type,
      ACL: "public-read",
    };

    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      });
    });
  }

  function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native JavaScript objects
  }
  

  function handleClick(url) {
    const data = { urls: url };
  
    postData('http://localhost:3000/contacts', data)
      .then(response => {
        console.log(response);
        // Do something with the response
      })
      .catch(error => {
        console.error(error);
        // Handle the error
      });
  }
  

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          const file = event.target.files[0];
          const folderName = "uploads"; // Replace with your desired folder name
          const fileName = file.name;
          uploadFileToS3(file, folderName, fileName)
            .then((url) => {
              // Do something with the uploaded file URL
              console.log(`File uploaded successfully: ${url}`);
              handleClick(url);
              
            })
            .catch((err) => {
              // Handle the upload error
              console.error("Error uploading file:", err);
            });
        }}
        className="btn"
      />
      
    </div>
  );
};

export default Sheet;
