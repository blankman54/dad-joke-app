import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Joke() {

const [joke, setJoke] = useState('')

useEffect( () => {

axios
    .get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
    .then(res => setJoke(res.data))
    .catch(err => console.log(err))

}, [] )

const fetchJoke = () => {
    
    axios
    .get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
    .then(res => setJoke(res.data))
    .catch(err => console.log(err))
}

  return (
    <div className="w-50">
      <div className="card">
        <h5 className="card-header">Dad Joke</h5>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <a href="#" className="btn btn-primary" onClick={fetchJoke}>Another One</a>
        </div>
      </div>
    </div>
  );
}
