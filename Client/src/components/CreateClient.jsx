import React, { useState } from "react";
import uniquid from "uniquid";
import axios from "axios";

const CreateClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const saveClient = async () => {
    try {
      let client = {
        id: uniquid(),
        name,
        email,
        telephone,
      };

      await axios.post("/api/client", client)
      .then(res => alert(res.data))

    } catch (err) {console.log(err)}
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="sm-col-6 offset-3">
          <h2>Create new Client</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telephone" className="form-label">
              Telephone
            </label>
            <input
              type="text"
              className="form-control"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <button className="btn btn-outline-success" onClick={saveClient}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateClient;
