import axios from "axios";
import { IMovie } from "../../types/data"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const MovieForm = (props: { updateMovieList: (movie: IMovie) => void; }) => {
  const [title, setTitle] = useState<string>('')
  const [plot, setPlot] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [score, setScore] = useState<number>(0)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    const movieData : IMovie = {title, plot, imageUrl, score}

    try {
      const response = await axios
        .post('http://localhost:3000/api/v1/movies', {movie: movieData})

        props.updateMovieList(response.data)

    } catch(error: any) {
      console.log(error)
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", {required: true})}
            type="text"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
          {errors?.title?.type === "required" && <p>This field is required</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Plot</Form.Label>
          <Form.Control
            {...register("plot", {required: true})}
            type="text"
            name="plot"
            onChange={e => setPlot(e.target.value)}
          />
          {errors?.plot?.type === "required" && <p>This field is required</p>}
        </Form.Group><br />

        <Form.Group>
          <Form.Label>Movie cover</Form.Label>
          <Form.Control
            {...register("imageUrl", {required: false})}
            type="file"
            name="imageUrl"
            onChange={e => setImageUrl(e.target.value)}
          />
        </Form.Group><br />

        {/* <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            {...register("score", {required: false})}
            type="number"
            name="score"
            onChange={e => setScore(e.target.value)}
          />
        </Form.Group><br /> */}

        <Button variant="primary" type="submit">
          Submit
        </Button><hr />
      </Form>
    </>
  )
}
