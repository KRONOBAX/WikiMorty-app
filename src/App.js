import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination from './components/Pagination';
import Buscar from "./components/Buscar";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [filter, setFilter] = useState('')
  
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }
  
  const onPrevius = () => {
    fetchCharacters(info.prev);
  }
  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])
  
  const personjesFiltrados = characters.filter((characters) =>
  {
  console.log(characters.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()).length)
  return characters.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  }
	)

  return (
    <>
      <Navbar brand="WikiMorty" filter={filter} setFilter={setFilter}/>
      <div className='text-center container my-2'>
      <small className='text-muted '>Designed by Santiago Cabrera</small>
      </div>
      <div className='container mt-5'>
        <Characters characters={personjesFiltrados} />
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} />
      </div>
    </>

  );
}

export default App;
