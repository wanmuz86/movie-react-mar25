
import {  useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieDetail from './components/MovieDetail'
import MovieList from './components/MovieList'
import Search from './components/Search'
import axios from 'axios'

function App() {

  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie]  = useState(null)
 
  const callApi = async (movieSearch) => {
    try {
    const response = await 
    axios.get(`https://www.omdbapi.com/?s=${movieSearch}&apikey=87d10179`)
    console.log(response.data)
    if (response.data.Response === "True"){
    setMovies(response.data.Search) // THe list of movies is inside Search key, we pass th Search key down
    }
    else {
      alert(response.data.Error)
    }  
  }
    catch (error){
      console.log(error)
    }
  }
  const retrieveimdbId =  (imdbID) => {
    setSelectedMovie(imdbID)
  }

  return (
    <>
      <Header/>
      <Search handleUserSearch={callApi}/>
      <MovieList movieProps={movies} handleSelect={retrieveimdbId}/>
      {selectedMovie != null ? <MovieDetail omdbId={selectedMovie}/> : ""} 
      <Footer/>
    </>
  )
}

export default App
