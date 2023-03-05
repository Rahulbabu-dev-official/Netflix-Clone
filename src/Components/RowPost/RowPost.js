import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, Image_Url} from '../../Constents/Constent'
import YouTube from 'react-youtube'
function RowPost(props) {

  const [movies, setMovies] = useState([])

  const [urlId,setUrlid]=useState('')


  useEffect(() => {
   axios.get(props.url).then((response)=>{
    console.log(response.data);
    setMovies(response.data.results)
   })
  
  },[props.url])
  

  const opts = {
    height: '390',
    Width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    };

    const handleClick =(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
          setUrlid(response.data.results[0])
        }else{
          console.log('Empty Array');
        }
          
        
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>

    {movies.map((obj)=>
        <img onClick={()=>handleClick(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'}  alt="poster" src={`${Image_Url+obj.backdrop_path}`}  />

    )}
        
        </div>

        {urlId && <YouTube opt={opts} videoId={urlId.key}/>}
    </div>
    
  )
}


export default RowPost