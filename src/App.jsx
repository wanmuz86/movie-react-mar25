
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MovieDetail from './components/MovieDetail'
import MovieList from './components/MovieList'
import Search from './components/Search'

function App() {


  return (
    <>
      <Header/>
      <Search/>
      <MovieList/>
      <MovieDetail/>
      <Footer/>
    </>
  )
}

export default App
