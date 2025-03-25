import React from 'react'

const MovieList = ({movieProps}) => {
  return (
    <div>
        {
            movieProps.map((movie)=> <p key={movie.imdbID}>{movie.Title}</p>)
        }
    </div>
  )
}

export default MovieList