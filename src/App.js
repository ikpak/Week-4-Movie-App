import React, {useEffect, useState} from 'react'
import './App.css';
import MovieList from './components/MovieList'
import Navigation from './components/Navigation'
import UpcomingMovieList from './components/Carousel'
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

const apiKey = process.env.REACT_APP_APIKEY

function App() {
  let [movieList, setMovieList] = useState(null)
  let [originalList, setOriginalList] = useState(null)
  let [upcomingMovieList, setUpcomingMovieList] = useState(null)
  let [genreList, setGenreList] = useState(null)

  let page = 1

  const getPlayingNowMovies = async() => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    let data = await fetch(url)
    let result = await data.json()

    setMovieList(result.results)
    setOriginalList(result.results)
  }

  const getUpcomingMovies = async() => {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
    let data = await fetch(url)
    let result = await data.json() 

    setUpcomingMovieList(result.results)
    console.log("Latest Movies:", result)
  }

  const getGenreList = async() => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US&page=${page}`
    let data = await fetch(url)
    let result = await data.json()

    getUpcomingMovies()
    getPlayingNowMovies()

    setGenreList(result.genres)
  }

  const searchTheKeyword = (keyword) => {
    if(keyword === '') {
      setMovieList(originalList)
      return
    }
    
    let filteredList = movieList.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()))
    setMovieList(filteredList)
  }

  

  useEffect(() => {
    getGenreList()
  }, [])

  if(genreList === null || movieList === null) {
    return (<Loader
      className="loader"
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />)
  }

  return (
    <div>
      <Navigation searchTheKeyword={searchTheKeyword} />

      <div className="container">
        <UpcomingMovieList upcomingMovieList={upcomingMovieList} />
      </div>

      <div className="container cardContainer">
        <h2>Latest Movies</h2>
        <MovieList movieList={movieList} genresFromApp={genreList} />
      </div>
    </div>
  )
}

export default App;
