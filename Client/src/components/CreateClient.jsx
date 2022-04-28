import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import uniqid from "uniqid";
import Swal from "sweetalert2";

const CreateClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const handleSaveClient = async (e) => {
    e.preventDefault();
    try {
      let client = {
        id: uniqid(),
        name,
        email,
        telephone,
      };

      await axios.post("/api/client", client).then((res) => {
        new Swal({
          title: `${res.data}`,
          text: "Operation Successfully",
          icon: "success",
        });
        history.push("/admin");
      });
      setName("");
      setEmail("");
      setTelephone("");
    } catch (err) {
      setErrors(err.response.data.errors);
      setTimeout(() => setErrors([]), 1000);
    }
  };

  return (
    <div className="container">
      <div className="m-5">
        <h3>CREATE A NEW CLIENT</h3>
        {errors &&
          errors.map((err) => (
            <div class="alert alert-danger" role="alert" key={err.index}>
              {err.msg}
            </div>
          ))}
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
        <button type="submit" className="btn btn-outline-success container">
          Save
        </button>
      </form>
    </div>
  );
};
export default CreateClient;
