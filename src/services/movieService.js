import axios from "axios";
const token = "94fd977d"

function getMovieByIMDbID(idIMDb, isPlot, year) {
    
    let url = `http://www.omdbapi.com/?i=${idIMDb}&apikey=${token}`

    if (year?.length !== 0)
        url = url.concat(`&y=${year}`)

    if (isPlot) 
        url = url.concat('&plot=full')

    return axios.get(url)
    .then(response => response.data)
    .catch(error => console.error(error))
}

function getMovieTitle(title, year) {
    
    let url = `http://www.omdbapi.com/?s=${title}&apikey=${token}`

    if (year?.length !== 0)
        url = url.concat(`&y=${year}`)

    return axios.get(url)
    .then(response => response.data)
    .catch(error => console.error(error))
}

export { getMovieByIMDbID, getMovieTitle }

 