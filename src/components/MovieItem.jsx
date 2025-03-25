import React from 'react'

const MovieItem = ({movie}) => {
  return (
    <div className='card p-3 mb-3'>
        <div className='row'>
            <div className='col-3'>
                <img src={movie.Poster} alt={movie.Title} className='img-fluid'/>

            </div>
            <div className='col-9'>
                <div className='card-body'>
                    <h5>{movie.Title}</h5>
                    <p>{movie.Year} -  {movie.Type}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MovieItem