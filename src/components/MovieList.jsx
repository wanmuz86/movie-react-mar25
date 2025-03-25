import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({movieProps}) => {
  return (
    <div className='p-3'>
        {
            movieProps.map((movie)=> 
            <MovieItem key={movie.imdbID} movie={movie}/>
            )
        }
    </div>
  )
}

export default MovieList