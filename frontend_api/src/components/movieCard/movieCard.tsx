import { IMovie } from '../../types/data';
import './style.css';
export const MovieCard = (props: IMovie) => (
  <>
    <div className="card">
      <div className="name">{props.title}</div>
      <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies" />
      <div className="card__details">
        <span className="tag">Nature</span>
        <span className="tag">Lake</span>
      </div>
    </div>
  </>
)
