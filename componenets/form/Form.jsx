import React, { useState, useEffect, useRef } from "react";
import "./Form.css";
import { FcUpload } from "react-icons/fc";
const Form = () => {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [file, setFile] = useState("");
  const [statee, setStatee] = useState([]);
  const inputField = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, number, file: URL.createObjectURL(file) };
    // naya jadai gareko data haru
    setStatee([...statee, data]);
    localStorage.setItem("formData", JSON.stringify({ statee }));
    // suru ma k cha ta statee cha tyo rakhn ani naya data jun aaucha tyo rakhne ani naya data k ma aaucha ta ? data ma aaucha so
    setName("");
    setNumber("");
    setFile("");
  };
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setStatee(JSON.parse(savedData));
    }
  }, []);

  const handleFileUpload = (e) => {
    console.log(e.target.files[0], "hello");
    setFile(e.target.files[0]);
  };
  const handlebutton = () => {
    inputField.current.click();
  };
  return (
    <>
      <h2>Upload Form</h2>
      <form>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Number:</label>
        <br />
        <input
          type="phone"
          name="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <label>Image:</label>
        <br />
        <br />
        <input className="makeithidden" ref={inputField} type="file" />
        <FcUpload className="uploadButton" onClick={handlebutton} />
      </form>
    </>
  );
};

export default Form;
