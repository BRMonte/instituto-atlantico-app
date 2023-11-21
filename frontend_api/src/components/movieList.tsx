import { useState, useEffect } from "react"
import { MovieCard } from "./movieCard"
// import { PostForm } from '../Posts/PostForm'
import { IMovie } from "../types/data"
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

  // const updateMovieList = (post: IMovie) => {
  //   let _movies = movies;
  //   _movies.unshift(post);
  //   setMovies(_movies);

  //   setUpdate(true)
  // }

  return (
    <>
      {/* <PostForm updatePostList={updatePostList} /> */}

      <h1>Movie List</h1>
      {movies.map((movie: IMovie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          plot={movie.plot}
        />
      ))}
    </>
  )
}
