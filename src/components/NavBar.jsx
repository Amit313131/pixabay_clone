import React from 'react'
import { useContext } from 'react';
import PixabayContext from '../Context/PixabayContext'
import { useState } from 'react';
const NavBar = () => {

    const {fetchImageByCategory,setQuery}=useContext(PixabayContext);
    
    const [searchTerm, setSearchTerm] = useState(''); // State for the input value

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            setQuery(searchTerm); // Update the query with the search term
            setSearchTerm(''); // Clear the input field
        }
    };

  return (
    <>
     <div className="container text-center my-3">
         <button onClick={()=>fetchImageByCategory("nature")}type="button" className="btn btn-outline-primary mx-3">Nature</button>
        <button onClick={()=>fetchImageByCategory("sports")}type="button" className="btn btn-outline-secondary mx-3">Sports</button>
        <button onClick={()=>fetchImageByCategory("buildings")}type="button" className="btn btn-outline-success mx-3">Buildings</button>
        <button onClick={()=>fetchImageByCategory("education")}type="button" className="btn btn-outline-danger mx-3">Education</button>
        <button onClick={()=>fetchImageByCategory("places")}type="button" className="btn btn-outline-warning mx-3">Places</button>
        <button onClick={()=>fetchImageByCategory("health")}type="button" className="btn btn-outline-info mx-3">Health</button>
        <button onClick={()=>fetchImageByCategory("food")}type="button" className="btn btn-outline-light mx-3">Food</button>
        <button onClick={()=>fetchImageByCategory("travel")}type="button" className="btn btn-outline-danger mx-3"> Travel</button>
    </div>

    <div className="container" style={{ width: "800px" }}>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} onKeyDown={handleSearch} className="form-control bg-dark text-light"></input>
      </div>

    </>
  )
}

export default NavBar
