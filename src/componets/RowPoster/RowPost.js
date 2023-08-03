import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../axios'
import {API_KEY, imageUrl } from '../../constants/constants'

function RowPost(props) {
  const [Movies,SetMovie] = useState([]);
  const [urlId ,SeturlId]= useState('')
  useEffect(()=>{
   // eslint-disable-next-line
    axios.get(props.url).then((res)=>{
      SetMovie(res.data.results)
    })
  },[props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data);
      if(res.data.length!==0){
    SeturlId(res.data)
      }else{
        console.log('arry empty');
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {
            Movies.map((img)=>
              <img onClick={()=>handleMovie(img.id)} className= 'poster' src={`${imageUrl+img.backdrop_path}`} alt="" />
            )
          }
         
        </div>
        {

         urlId && <Youtube opts={opts} videoId={urlId.imdb_id}/>
        }
    </div>
    
  )
}

export default RowPost