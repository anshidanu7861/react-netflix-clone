import axios from '../../axios'
import React, {useEffect, useState} from 'react'
import "./RowPost.css"
import {imageUrl, API_KEY} from '../../constant/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results)
    }).catch((err)=>{
      alert('Network Error')
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }; 

  const handleMovies = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj)=>
        <img onClick={()=>handleMovies(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

        )}
      </div>

        {  urlId &&    <YouTube opts={opts} videoId={urlId.key} />      }

    </div>
  )
}

export default RowPost
