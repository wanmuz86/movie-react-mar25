import React,{useEffect, useState} from 'react'
import axios from 'axios'

const MovieDetail = ({omdbId}) => {

    const [movie,setMovie] = useState(null)

    useEffect(() => {
        // whenever the omdbId changed, call the API
        retrieveMovieDetail(omdbId)
    }, [omdbId])

    const retrieveMovieDetail = async (omdbId) => {
        const response = await axios.get(`https://www.omdbapi.com/?i=${omdbId}&apikey=87d10179`)
        setMovie(response.data)
    }
  return (
    <div className='card mt-3 p-3'>
        {movie == null ? <p>Loading...</p> : 
        <div>
        <h3>{movie.Title}</h3>
        <h4>{movie.Genre} - {movie.Year}</h4>
        <img src={movie.Poster} alt={movie.Title}  className='img-fluid'/>
        </div>
}
    </div>
  )
}

export default MovieDetail