import React from 'react'
import { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'


const Images = () => {
    const {imgData}=useContext(PixabayContext)
    //or const data=useContext(PixabayContext) and in map use {data.imgData}  instead of {imgData}
  return (
    <>
    <div className="container my-5">
    <div className='flex'>       
      {imgData.map((data)=>(<div key={data.id}>
       
        <div className="item">
            <img src={data.largeImageURL} alt="xyz" />
        </div>
      </div>))}
    </div>
    </div>
    </>
  )
}

export default Images
