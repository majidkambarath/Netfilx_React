import React, { useEffect,useState  } from 'react'
import { API_KEY ,imageUrl} from '../../constants/constants';
import './Banner.css'
import axios from '../axios';
function Banner() {
 const [movies,SetMovie] = useState()
  useEffect(()=>{
     axios.get(`trending/all/week?api_key=${API_KEY}`).then((res)=>{
     
      SetMovie(res.data.results[0])
     })
  },[])
  return (
    <div
    style={{backgroundImage:`url(${movies? imageUrl+movies.backdrop_path: ""})`}}
    className='banner'>
        <div className="content">
            <h1 className='title'>{movies? movies.name: ""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My Lisit</button>
            </div>
            <h1 className='discription'>{movies ? movies.overview : ""} </h1>
        </div>
        <div className='fade'></div>

    </div>
  )
}

export default Banner