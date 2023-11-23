import axios from 'axios';

const getMovieIndex = async () => {
  try {
    const response = await axios
      .get('http://localhost:3000/api/v1/movies')

    const data = response.data
    return data;

  } catch(error: any) {
    console.log(error)
  }
}

export default getMovieIndex;
