import React, { useState, useCallback } from "react";
import axios from "axios";
import Image from "./Image";

const imgurUploadUrl = "https://api.imgur.com/3/image";

function postApi(data) {
  var formData = new FormData();
  formData.append("image", data, data.name);

  return axios({
    method: "post",
    url: imgurUploadUrl,
    data: formData,
    headers: {
      Authorization: "",
      "Content-Type": "multipart/form-data"
    }
  });
}

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const onChangeHandler = useCallback((e) => {
    e.preventDefault();
    setTitle("");
    setImgUrl("");

    let files = e.target.files;
    let data = files[0];
    postApi(data)
      .then((res) => {
        let resData = res.data.data;
        setTitle("dummy yo");
        setImgUrl(resData.link);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <h2>Upload a picture</h2>
      <input type="file" name="file" onChange={(e) => onChangeHandler(e)} />
      {imgUrl !== "" ? <Image src={imgUrl} title={title} /> : ""}
    </div>
  );
};

export default UploadForm;
