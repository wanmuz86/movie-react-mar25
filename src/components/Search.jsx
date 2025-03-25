import React,{useState} from 'react'

const Search = ({handleUserSearch}) => {
    // To retrieve value from input field
    const [movieName,setMovieName] = useState('')

  return (
    <div className='row p-3'>
        <div className='col-9'>
            <input type="text" 
            className='form form-control' 
            placeholder='Enter movie name' 
            value={movieName}
            onChange={(e)=> setMovieName(e.target.value)}
            />
        </div>
        <div className='col-3'>
            <button 
            onClick={(()=>handleUserSearch(movieName))}
            className='btn btn-danger' 
            style={{width:'100%'}}>Search for movie</button>
        </div>
        
    </div>
  )
}

export default Search