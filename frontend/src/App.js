import React, { useState } from 'react'
import Moviecard from "./MovieCard"
import { Link } from 'react-router-dom';

const App = () => {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=${process.env.REACT_APP_MOVIE_APP}`)
    const res = await response.json()
    setResults(res.Search)
    setInput("")
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="d-flex flex-grow-1 justify-content-center">
            <form className="d-flex">
              <input className="form-control me-2" type="search" value={input}
                onChange={(e) => setInput(e.target.value)} placeholder="Search For Movie/Show" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" onClick={fetchData}>Search</button>
            </form>
          </div>
          <Link to="/liked" className='btn btn-primary me-2'>Favourites</Link>
        </div>
      </nav>

      <div className="d-flex flex-row flex-wrap justify-content-evenly">
        {results?.length ? (
          results.map((movie, index) => (
            <Moviecard key={index} movie={movie} />
          ))
        ) : ""}
      </div>

    </div>
  )
}

export default App