import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Liked = () => {

    const [results, setResults] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/liked')
        const res = await response.json()
        setResults(res)
    };

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className='btn btn-primary mx-auto'>Home</Link>
            </nav>
            <div className="d-flex flex-row flex-wrap justify-content-evenly">
                {results?.length ? (
                    results.map((movie, index) => (
                        <div key={index}>
                            <div className="card" style={{ width: "14rem", margin: "1rem" }}>
                                <img src={movie.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.year}</p>
                                    <p className="card-text">{movie.type}</p>

                                </div>
                            </div>
                        </div>
                    ))
                ) : "No Liked Movies here"}
            </div>

        </div>
    )
}

export default Liked