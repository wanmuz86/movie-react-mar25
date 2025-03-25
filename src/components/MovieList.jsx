import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({movieProps, handleSelect}) => {
    const itemClicked = (imdbID) => {
        handleSelect(imdbID)
    }
  return (
    <div className='p-3' id="movie-list">
        {
            movieProps.map((movie)=> 
            <MovieItem key={movie.imdbID} movie={movie} handleClick={itemClicked}/>
        )
        }
    </div>
  )
}

export default MovieList