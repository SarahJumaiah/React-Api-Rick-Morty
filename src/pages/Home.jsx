import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://6657369e9f970b3b36c865b0.mockapi.io/Images/')
      .then((response) => setCharacters(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
    <br />
    <h1 className='text-center text-xl  font-bold'>Rick and Morty Characters</h1>
    <div className="grid grid-cols-3 gap-4 p-4">
      {characters.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
          <div className="card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
}

export default Home;
