import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const EditClient = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const history = useHistory();

  const editClient = async () => {
    try {
      await axios.get("/api/client/edit-client/" + id).then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setTelephone(res.data.telephone);
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    editClient();
  }, []);

  const handleUpdateClient = async (e) => {
    e.preventDefault();
    try {
      const updateDataClient = {
        name: name,
        email,
        telephone,
        id
      };

      await axios
        .patch("/api/client/update-client/" + id, updateDataClient)
        .then((res) => {
          alert(res.data);
          history.push("/home")
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="container" onSubmit={handleUpdateClient}>
      <div className="m-5">
        <h3>EDIT CLIENT</h3>
      </div>
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
        Update
      </button>
    </form>
  );
};

export default EditClient;
