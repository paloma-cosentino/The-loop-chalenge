import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Search({searchAll}) {
    return (
        <div className="search">
            <div className="film-poster">
            <div className="section-title">
                <h1>Reseach results</h1>
            </div>
            <div className="results-cards">
            {
                searchAll.map((search) => {
                    return (
                        <Link key={search.imdbID} to={`/filmInfo/${search.imdbID}`} style={{ textDecoration: 'none' }}>
                            <div className="card">
                                <h1>{search.title}</h1>
                                <img src={search.poster} alt="Poster" />
                            </div>  
                        </Link>
                    )
                })
            }
            
            </div>
        </div>
        </div>
    )
}

export default Search