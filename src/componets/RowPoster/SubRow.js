import React, {useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../axios'

import {imageUrl } from '../../constants/constants'


function SubRow(props) {
    const [Movie,SetMovies] = useState([]);
    useEffect(()=>{
      axios.get(props.url).then((res)=>{
    
        SetMovies(res.data.results)
      })
    })
  return (
    <div className='row'>
        <h2>Action</h2>
        <div className='posters'>
          {
            Movie.map((img)=>
              <img className='small-posters' src={`${imageUrl+img.backdrop_path}`} alt="" />
            )
          }
         
        </div>
       
    </div>
  )
}

export default SubRow