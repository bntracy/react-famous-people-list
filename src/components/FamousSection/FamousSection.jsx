import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  const fetchPeople = () => {
    // fetch the list of people from the server
    axios({
      method: 'GET',
      url: 'api/people/'
    }).then(response => {
      setPeopleArray(response.data);
    }).catch(error => {
      console.log('Error when getting people', error);
    });
  }

  // on load, call the fetchPeople() function
  useEffect(fetchPeople, []);

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
    axios({
      method: 'POST',
      url: 'api/people/',
      data: {
        name: famousPersonName,
        role: famousPersonRole
      }
    }).then(response => {
      fetchPeople();
      setPersonName('');
      setPersonRole('');
    }
    ).catch(error => {
      console.log('Error when adding a person', error);
    });
  
  }

    return (
      <section className="new-person-section">
        <FamousPersonForm 
          addPerson={addPerson}
          famousPersonName={famousPersonName}
          setPersonName={setPersonName}
          famousPersonRole={famousPersonRole}
          setPersonRole={setPersonRole}
        />
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <ul>
          {/* Render the list of famous people */}
          {famousPeopleArray.map(person => (<li key={person.id}>{person.name} is famous for "{person.role}".</li>))}
        </ul>
      </section>
    );
}

export default FamousSection;
