import React, { useEffect, useState } from "react";
import "./sass/clients.css";

const Clients = () => {
  const [clients, setclients] = useState([]);
  const url = process.env.REACT_APP_CLIENT_URL;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setclients(data.data));
  }, []);
        console.log(clients)
  return (
    <div className="client">
      <h1> Welcome to the Client Page</h1>
      <table>
        <thead>
          <tr>
            <th> Full Name</th>
            <th> Email</th>
            <th> Phone Number</th>
            <th> Gender</th>
            <th> Images </th>
          </tr>
        </thead>
        <tbody>
          {clients
            ? clients?.map((client, idx) => (
                <tr key={idx}>
                  <td>
                  <p> <span> {client.contact.firstname}</span>
                      <span> {client.contact.lastname}</span>
                      </p>
                  </td>

                  <td> {client.email}</td>
                  <td>{client.phone}</td>
                  <td> {client.contact.gender}</td>
                  <td>
                    <img src={client.image} alt='icon'/>
                   
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
