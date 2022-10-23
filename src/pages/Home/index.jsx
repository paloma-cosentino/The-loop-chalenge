import React, { useState, useEffect } from 'react'
import "./style.css"
import Header from "../../componets/header/index"
import Search from "../../componets/searchResults/index"
import Favorites from "../../componets/favorites/index"
import { getMovieByIMDbID, getMovieTitle } from '../../services/movieService'



function Home() {
  const [searchAll, setSearchAll] = useState([])
  const [favorites, setFavorites] = useState([])

  async function handleSearch(searchInput, yearInput, selected) {
    if ( selected === 'title') {
      const data = await getMovieTitle(searchInput,yearInput)
      setSearchAll(data.Search.map((result) => (
        {
          title: result.Title,
          poster: result.Poster,
          imdbID: result.imdbID
        }
      )))
    } else if( selected === 'imdb') {
      const data = await  getMovieByIMDbID(searchInput, false,yearInput)
      setSearchAll([
        {
          title: data.Title,
          poster: data.Poster,
          imdbID: data.imdbID
        }
      ])

    }
  }

  useEffect(() => {
    const dataFavorites = JSON.parse(localStorage.getItem("MovieInfoFavorites")) || []
    setFavorites(dataFavorites)
  }, [])

  return (
    <div className="home">
      <Header home handleSearch={handleSearch}/>
      <main>
        {
          searchAll.length > 0 && 
            <Search searchAll={searchAll}/>
        }

        {
          favorites.length > 0 && 
            <Favorites favorites={favorites} />
        }
      </main>
    </div>
  )
} 

export default Home