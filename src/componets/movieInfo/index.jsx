import React from 'react'
import "./style.css"

function MovieInfo({movie}) {

    function handleFavorites(event) {
        const dataFavorites = JSON.parse(localStorage.getItem("MovieInfoFavorites")) || [];
        dataFavorites.push(movie)
        
        localStorage.setItem("MovieInfoFavorites", JSON.stringify(dataFavorites))
        event.currentTarget.classList.toggle('active');
    }

    function handleSee(event) {
        event.currentTarget.classList.toggle('active');
    }

    return (
        <div className="info-card">
            <div className="title">
                <h1>{movie.title}</h1>
            </div>
            <div className="box">
                <figure className="poster">
                <img src={movie.poster} alt="Poster" />
                </figure>
                <div className="text-info">
                    <div className="full-sinopse">
                        <p>{movie.fullSinopse}</p>
                    </div>
                    <div className="tecnical-info">
                        <p className='director-name'>Director: {movie.directorName}</p>
                        <p className='rating'>IMDb rating: {movie.rating}</p>
                        <p className='casting'>Casting: {movie.casting}</p>
                        <p className='year'>Year:  {movie.year}</p>
                    </div>
                    <div className="icons">
                        <button className="favorite-film" onClick={handleFavorites}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 15.1875C9 15.1875 1.96875 11.25 1.96875 6.46876C1.96875 5.62352 2.2616 4.80439 2.79747 4.15073C3.33334 3.49708 4.07913 3.04927 4.90795 2.88351C5.73677 2.71774 6.59743 2.84426 7.34348 3.24153C8.08954 3.6388 8.67491 4.28229 9 5.06251V5.06251C9.32509 4.28229 9.91046 3.6388 10.6565 3.24153C11.4026 2.84426 12.2632 2.71774 13.092 2.88351C13.9209 3.04927 14.6667 3.49708 15.2025 4.15073C15.7384 4.80439 16.0312 5.62352 16.0312 6.46876C16.0312 11.25 9 15.1875 9 15.1875Z" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Favorite</p>
                        </button>
                        <button className="seen-movie" onClick={handleSee}>
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3.9375C4.375 3.9375 2.125 9 2.125 9C2.125 9 4.375 14.0625 10 14.0625C15.625 14.0625 17.875 9 17.875 9C17.875 9 15.625 3.9375 10 3.9375Z" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 11.25C11.2426 11.25 12.25 10.2426 12.25 9C12.25 7.75736 11.2426 6.75 10 6.75C8.75736 6.75 7.75 7.75736 7.75 9C7.75 10.2426 8.75736 11.25 10 11.25Z" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                             </svg>
                             <p>Already seen</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo