import React, { useEffect, useState } from "react";
import "./sass/clients.css";
import Avatar from "../../images/avatar.png";
const Clients = () => {
  const [clients, setclients] = useState([]);
  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/companies?_quantity=1")
      .then((response) => response.json())
      .then((data) => setclients(data.data));
  }, []);

  return (
    <div className="client">
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
                  <td>{client.name}</td>

                  <td> {client.email}</td>
                  <td>{client.phone}</td>
                  <td> {client.gender}</td>
                  <td>
                    {" "}
                   {client.image} 
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
