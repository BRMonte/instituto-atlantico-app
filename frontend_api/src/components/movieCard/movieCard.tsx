import { IMovie } from '../../types/data';
import './style.css';
export const MovieCard = (props: IMovie) => (
  <>
    <div className="card">
      <div className="name">{props.title}</div>
      <img src={props.imageUrl} alt="movie cover" />
      <div className="card__details">
        <span className="tag">Nature</span>
        <span className="tag">Lake</span>
        <span className="tag">{props.score}</span>
      </div>
    </div>
  </>
)
