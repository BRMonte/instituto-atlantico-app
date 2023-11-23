import { useState, useEffect } from "react"
import { MovieCard } from "../movieCard/movieCard"
import { SearchBox } from "../searchBox/searchBox"
// import { MovieForm } from '../movieForm/movieForm'
import getMovieIndex from '../../client/getMovieIndex'
import { IMovie } from "../../types/data"
import './style.css';

export const MovieList = () => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [isUpdate, setUpdate] = useState<boolean>(false)

  useEffect(() => {
    getMovies()
    setUpdate(false)
  }, [isUpdate])

  const getMovies = async () => {
    const data = getMovieIndex();
    setMovies(await data)
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
            imageUrl={movie.imageUrl}
            score={movie.score}
          />
        ))}
      </div>
    </>
  )
}
