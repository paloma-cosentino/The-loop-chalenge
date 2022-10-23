import React from 'react'
import "./style.css"

function Favorites({favorites}) {
    return (
        <div className="favorites">
            <div className="section-title">
                <h1>Favorites</h1>
            </div>
            <div className="favorited-movies">
            {
                favorites.map((favorite) => {
                    return (
                        <section className='card' key={favorite.title}>
                            <div className='movie-image'>
                            <img src={favorite.poster} alt="poster do filme" />
                            </div>
                            <div className="movie-info">
                                <div className='block-01'>
                                    <h1 className='movie-name'>{favorite.title}</h1>
                                    <p className='sinopse'>{favorite.fullSinopse}</p>
                                </div>
                                <div className='block-02'>
                                    <p className='director-name'>Director: {favorite.directorName}</p>
                                    <p className='rating'>IMDb rating:  {favorite.rating}</p>
                                    <p className='casting'>Casting: {favorite.casting}</p>
                                    <p className='year'>Year:  {favorite.year}</p>
                                </div>
                            <div className="icons">
                                <div className="heart active">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 15.1875C9 15.1875 1.96875 11.25 1.96875 6.46876C1.96875 5.62352 2.2616 4.80439 2.79747 4.15073C3.33334 3.49708 4.07913 3.04927 4.90795 2.88351C5.73677 2.71774 6.59743 2.84426 7.34348 3.24153C8.08954 3.6388 8.67491 4.28229 9 5.06251V5.06251C9.32509 4.28229 9.91046 3.6388 10.6565 3.24153C11.4026 2.84426 12.2632 2.71774 13.092 2.88351C13.9209 3.04927 14.6667 3.49708 15.2025 4.15073C15.7384 4.80439 16.0312 5.62352 16.0312 6.46876C16.0312 11.25 9 15.1875 9 15.1875Z" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            </div>
                        </section>
                    )
                })
            }

            </div>
        </div>
    )
}

export default Favorites