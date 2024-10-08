import React from 'react'
import PixabayContext from './PixabayContext';
import { useEffect } from 'react';
import { useState } from 'react';

const PixabayState = (props) => {
const [imgData, setimgData] = useState([]);
const [query, setQuery] = useState(['london']);
    const api_key="45913892-e05aca2b948e3e341881e66e0";

    useEffect(() => {
        const FetchDataFromAPI=async()=>{
            const api=await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`);
            const data=await api.json();
            console.log(data.hits)
            setimgData(data.hits);
        };
        FetchDataFromAPI();
    }, [query]);

    const fetchImageByCategory = async (cat) => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      console.log(data.hits);
      setimgData(data.hits);
      
    };

  return (
    <>
    <PixabayContext.Provider value={{imgData,fetchImageByCategory,setQuery}}>{props.children}</PixabayContext.Provider>
    </>
  );
};

export default PixabayState;
