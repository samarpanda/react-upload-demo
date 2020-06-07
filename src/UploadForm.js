import React, { useState } from "react";
import axios from "axios";
import Image from "./Image";

const imgurUploadUrl = "https://api.imgur.com/3/image";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function onChangeHandler(e) {
    e.preventDefault();
    setTitle("");
    setImgUrl("");

    let files = e.target.files;
    let data = files[0];
    var formData = new FormData();
    formData.append("image", data, data.name);

    axios({
      method: "post",
      url: imgurUploadUrl,
      data: formData,
      headers: {
        Authorization: "Client-ID 14254dcd74b36d3",
        "Content-Type": "multipart/form-data"
      }
    })
      .then((res) => {
        let resData = res.data.data;
        setTitle("dummy yo");
        setImgUrl(resData.link);
      })
      .catch((e) => console.error(e));
  }

  return (
    <div>
      <h2>Upload a picture</h2>
      <input type="file" name="file" onChange={(e) => onChangeHandler(e)} />
      {imgUrl !== "" ? <Image src={imgUrl} title={title} /> : ""}
    </div>
  );
};

export default UploadForm;
