import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)
      .then((response) => setCharacter(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!character) {
    return <div className="loading">Loading...</div>; 
  }

  return (
    <div className="character-detail-container">
      <div className="character-card">
        <img className="character-image" src={character.image} alt={character.name} />
        <h2 className="character-name">{character.name}</h2>
        <div className="character-info">
          <p><strong>Hair Color:</strong> {character.hair}</p>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Planet:</strong> {character.origin}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
