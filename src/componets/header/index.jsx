import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Header({home, back, handleSearch}) {
  const [searchInput, setSearchInput] = useState('');
  const [yearInput, setYearInput] = useState('');
  const [selected, setSelected] = useState('');

    return (
        <div className="header">
          <div className="logo">
            <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M63.6655 14.1479H11.7899C10.4876 14.1479 9.43188 15.2036 9.43188 16.5059V58.9495C9.43188 60.2518 10.4876 61.3075 11.7899 61.3075H63.6655C64.9677 61.3075 66.0235 60.2518 66.0235 58.9495V16.5059C66.0235 15.2036 64.9677 14.1479 63.6655 14.1479Z" stroke="#C4AB15" stroke-width="4.71596" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M37.7277 14.1479V61.3075" stroke="#C4AB15" stroke-width="4.71596" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.43188 23.5798H66.0235" stroke="#C4AB15" stroke-width="4.71596" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.43188 51.8756H66.0235" stroke="#C4AB15" stroke-width="4.71596" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.5798 14.1479V23.5798" stroke="#C4AB15" stroke-width="4.71596" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M51.8756 14.1479V23.5798" stroke="#C4AB15" stroke-width="4.71596" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.5798 51.8756V61.3075" stroke="#C4AB15" stroke-width="4.71596" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M51.8756 51.8756V61.3075" stroke="#C4AB15" stroke-width="4.71596" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          {home &&
          <div className="search-box">
            <select name="filters" id="search-filters" onChange={(e) => setSelected(e.target.value)}>
              <option value="">Choose an option</option>
              <option value="title">Title</option>
              <option value="imdb">IMDb Id</option>
            </select>
            <input 
            type="text" 
            name="search-engine" 
            id="search-input" 
            placeholder='Search here by Title or IMDB Id'
            onChange={(e) => setSearchInput(e.target.value)} />
            <input
            type="number" 
            id='year-parameter'
            placeholder='YYYY'
            onChange={(e) => setYearInput(e.target.value)}
            />
            <button onClick={() => handleSearch(searchInput, yearInput, selected)}>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7627 25.0112C20.5617 25.0112 25.2627 20.3102 25.2627 14.5112C25.2627 8.71218 20.5617 4.01117 14.7627 4.01117C8.96371 4.01117 4.2627 8.71218 4.2627 14.5112C4.2627 20.3102 8.96371 25.0112 14.7627 25.0112Z" stroke="black" stroke-width="3.81639" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.1877 21.9362L28.2627 28.0112" stroke="black" stroke-width="3.81639" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          }

          {
            back &&
            <div className="returnButton">
              <Link to="/" style={{ textDecoration: 'none' }}>
              <button>
                Return to Homepage 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12H20.25" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="#F0F0F0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>              
              </Link>
            </div>
          }
        
        </div>
    )
}

export default Header