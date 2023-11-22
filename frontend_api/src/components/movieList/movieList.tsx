import { useState, useEffect } from "react"
import { MovieCard } from "../movieCard/movieCard"
import { SearchBox } from "../searchBox/searchBox"
// import { MovieForm } from '../movieForm/movieForm'
import { IMovie } from "../../types/data"
import './style.css';
import axios from 'axios';

export const MovieList = () => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [isUpdate, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    getMovies()
    setUpdate(false)
  }, [isUpdate])

  const getMovies = async () => {
    try {
      const response = await axios
        .get('http://localhost:3000/api/v1/movies')

      const data = response.data

      setMovies(data.reverse())

    } catch(error: any) {
      console.log(error)
    }
  }

  // const updateMovieList = (movie: IMovie) => {
  //   let _movies = movies;
  //   _movies.unshift(movie);
  //   setMovies(_movies);

  //   setUpdate(true)
  // }

  return (
    <>
      {/* <MovieForm updateMovieList={updateMovieList} /> */}
      <SearchBox />
      <div className="grid-container">
        {movies.map((movie: IMovie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            plot={movie.plot}
          />
        ))}
      </div>
    </>
  )
}
