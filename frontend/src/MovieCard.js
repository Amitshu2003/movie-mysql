import React from "react";

function Moviecard({ movie }) {

  const { Title, Year, Type, Poster } = movie;

  const AddFav = async () => {
    try {
      const response = await fetch("http://localhost:5000/liked", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: Title,
          type: Type,
          year:Year,
          image:Poster
        }),
      });
      const res = await response.json()
      if(res)
      alert("added successfully")

    } catch(err){
      console.log(err);
    }
  }

  return (
      <>
        <div className="card" style={{ width: "14rem", margin: "1rem" }}>
          <img src={Poster} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">{Year}</p>
            <p className="card-text">{Type}</p>
            <button href="#" className="btn btn-primary" onClick={AddFav}>FAVORITE</button>
          </div>
        </div>
      </>
    );
  }

  export default Moviecard;
