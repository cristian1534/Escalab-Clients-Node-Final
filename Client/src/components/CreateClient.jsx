import React, { useState } from "react";
import uniquid from "uniquid";
import axios from "axios";

const CreateClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSaveClient = async (e) => {
    e.preventDefault();
    try {
      let client = {
        id: uniquid(),
        name,
        email,
        telephone,
      };

      await axios.post("/api/client", client).then((res) => {
        alert(res.data);
      });
      setName("");
      setEmail("");
      setTelephone("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container" >
      <div className="m-5">
        <h3>CREATE A NEW CLIENT</h3>
      </div>
      <form onSubmit={handleSaveClient}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Telephone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Telephone"
            onChange={(e) => setTelephone(e.target.value)}
            value={telephone}
          />
        </div>
        <div className="form-check"></div>
        <button type="submit" className="btn btn-outline-warning">
          Save
        </button>
      </form>
    </div>
  );
};
export default CreateClient;
