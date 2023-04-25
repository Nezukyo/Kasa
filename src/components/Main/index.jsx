import Card from "../Card";
import "../Main/style.css";
import React, { useState, useEffect } from 'react';

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/accommodation.json")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Erreur lors de la récupération des données : ", error));
  }, []);
  return (
    <div>
        {data.length > 0 ? (
          <div className="Main">
        {data.map(propriete => {
          return (
            <Card 
            key={propriete.id}
            id={propriete.id}
            title={propriete.title}
            cover={propriete.cover}
            />
          )
        })}
        </div>
        ) : (
          <div className="Main"></div>
        )}
            </div>
    )
  
  }
  
  export default Main;