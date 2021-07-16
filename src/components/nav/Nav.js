import React from 'react';
import request from '../../request/request';
import "./Nav.css";

function Nav({setSelectedOption}) {
   return (
      <div className="nav">
         <h2 onClick={()=>setSelectedOption(request.fetchTrending)}>Trending</h2>
         <h2 onClick={()=> setSelectedOption(request.fetchTopRated)}>Top Rated</h2>
         <h2 onClick={()=> setSelectedOption(request.fetchActionMovies)}>Action</h2>
         <h2 onClick={()=> setSelectedOption(request.fetchComedyMovies)}>Comdey </h2>
         <h2 onClick={()=> setSelectedOption(request.fetchHorrorMovies)}>Horror</h2>
         <h2 onClick={()=> setSelectedOption(request.fetchActionMovies)}>Romanc</h2>
         <h2 onClick={()=> setSelectedOption(request.fetchMystrey)}>Mystery</h2>
         <h2 onClick={()=> setSelectedOption(request.fetchSciFi)}>Sci-Fi</h2>
         <h2 onClick={()=> setSelectedOption(request.fetchWestern)}>Western</h2>
         <h2 onClick={()=> setSelectedOption(request.fetchAnimation)}>Animation</h2>
         <h2 onClick={()=> setSelectedOption(request.fetchTV)}>TV Movies</h2>
      </div>
   )
}

export default Nav
