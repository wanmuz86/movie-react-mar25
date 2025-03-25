
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieDetail from './components/MovieDetail'
import MovieList from './components/MovieList'
import Search from './components/Search'
import axios from 'axios'

function App() {

 

  const callApi = async (movieSearch) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${movieSearch}&apikey=87d10179`)
    console.log(response.data)
    
  }

  return (
    <>
      <Header/>
      <Search handleUserSearch={callApi}/>
      <MovieList/>
      <MovieDetail/>
      <Footer/>
    </>
  )
}

export default App
