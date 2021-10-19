import React, { useState } from "react";
import "../assets/css/client.css";
const Client = ({ changeMenu }) => {
  const [clientName, setName] = useState("");

  return (
    <section className="features-boxed">
      <div className="container text-center">
        <h1>Regular Costumer?</h1>

        <input
          className="form-control  container text-center "
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name Here"
        />
        <span>
          <button
            disabled={!clientName}
            className="btn btn-primary "
            type="submit"
            onClick={() => changeMenu(clientName)}
          >
            Search
          </button>
        </span>
      </div>
    </section>
  );
};

export default Client;
