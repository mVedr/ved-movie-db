import React, { useEffect } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import {useNavigate} from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const [location, setLocation] = useState('')
    const onChangeLocation = (event) => {
        setLocation(event.target.value)
    }
    const refreshPage = () => {
        navigate(0);
      }
      let count = 0
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight"><form ><input type="text" name="searchMovie" id="searchMovie" onChange={onChangeLocation}
                placeholder="Search Movies"
                value={location} /></form>
                <button onClick={async () => {
                    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f7e0c8d2f9cf6341f68c1606e7962da0&query=${location}&language=en-US&page=1&include_adult=false`)
                        .then(res => res.json())
                        .then(data =>{navigate('movie/'+data.results[0].id)})
                        .then(()=>{while(count!=1000){
                            count++;
                        }
                        refreshPage()
                        })
                }
                
                }>Search</button>
                </div>
        </div >
    )
}

export default Header