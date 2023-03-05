import React, { useState } from 'react'
import './Banner.css'
import {API_KEY,Image_Url} from '../../Constents/Constent'
import axios from '../../axios'
import { useEffect } from 'react'
function Banner() {
  
  const [movie, setMovie] = useState()

  useEffect(() => {
   
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213' `).then((response)=>{

      console.log(response.data.result)
      setMovie(response.data.results[
        Math.floor(Math.random()* response.data.results.length -1)
      ] )
    });
  
  }, [])
     

  return (
    <div
    style={{backgroundImage:`url(${movie ? Image_Url+movie.backdrop_path: ""})`}}
    className='banner'>
        <div className='content'>
    <h1 className='tilte'>{movie?.name || movie?.orginal_name}</h1>
    <div className='banner-btn'>
        <button className='button'>Play</button>
        <button className='button'>My list</button>

    </div>

    <h1 className='discription'>{movie ? movie.overview : ""}</h1>
        </div>
      <div className="fade-bottom"></div>

    </div>
  )
}

export default Banner