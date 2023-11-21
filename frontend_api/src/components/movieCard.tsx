import { IMovie } from '../types/data';
export const MovieCard = (props: IMovie) => (
  <>
    <h2>{props.title}</h2>
    <p>{props.plot}</p>
  </>
)
