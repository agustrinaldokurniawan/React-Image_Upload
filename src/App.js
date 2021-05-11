import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [image, setImage] = useState();

  const onSubmit = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("avatar", image);
    axios
      .post(url, bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((r) => console.log({ response: r.data }))
      .catch((e) => console.log({ error: e }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            image
              ? URL.createObjectURL(image)
              : "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
          }
          alt="Avatar"
          style={{
            backgroundColor: "gray",
            width: 100,
            height: 100,
            marginBottom: 10,
          }}
        />
        <div style={{ flexDirection: "row" }}>
          <input
            type="file"
            alt="avatar choose"
            className="Button"
            onChange={(e) => {
              // console.log(URL.createObjectURL(e.target.files[0]));
              setImage(e.target.files[0]);
            }}
          />
          <button className="Button" onClick={onSubmit}>
            Submit
          </button>
        </div>
        <div style={{ flexDirection: "row" }}>
          <input
            type="text"
            style={{ width: 200, marginTop: 10 }}
            placeholder="api post url"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button
            onClick={() => {
              alert("url changed to : " + url);
            }}
          >
            save url
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
