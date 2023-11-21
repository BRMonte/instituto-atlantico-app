import { IMovie } from '../types/data';
export const Movie = (props: IMovie) => (
  <>
    <h2>{props.title}</h2>
    <p>{props.plot}</p>
  </>
)
