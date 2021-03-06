import React,{useEffect,useState} from 'react'
import './sass/Team.css'
const Team = () => {
  const [Teams, setTeams] = useState([]);
  const url = process.env.REACT_APP_TEAM_URL;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeams(data.data));
      
  }, []);
  console.log(Teams)
  return (
    <div className='Team'>
      <h1> Welcome to the Team.</h1>
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
          {Teams
            ? Teams?.map((Team, idx) => (
                <tr key={idx}>
                  <td>
                  <p> <span> {Team.firstname}</span>
                      <span> {Team.lastname}</span>
                      </p>
                  </td>

                  <td> {Team.email}</td>
                  <td>{Team.phone}</td>
                  <td> {Team.gender}</td>
                  <td>
                    <img src={Team.image} alt='icon'/>
                   
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>


    </div>
  )
}

export default Team