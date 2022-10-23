import React, {useEffect, useState} from 'react'
import "./style.css"
import Header from "../../componets/header/index"
import MovieInfo from '../../componets/movieInfo'
import { useParams } from 'react-router-dom';
import { getMovieByIMDbID } from '../../services/movieService';


 function FilmDetails() {
   const { idIMDb } = useParams();
  
  const [movie, setMovie] = useState({title: '',poster: '', fullSinopse: '',directorName: '', rating: '', casting: '', year: ''});

  useEffect(() => {
	async function fetchData() {
		const data = await getMovieByIMDbID(idIMDb,true)
		setMovie({
			title: data.Title,
			poster: data.Poster,
      fullSinopse: data.Plot,
      directorName: data.Director,
      rating: data.imdbRating,
      casting: data.Actors,
      year: data.Year,
		})
	}

	fetchData();
}, []);

  return (
    <div className="film-info">
        <Header back />
        <MovieInfo movie={movie}/>
     </div>
  )
} 

export default FilmDetails