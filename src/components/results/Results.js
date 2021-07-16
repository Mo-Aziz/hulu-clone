import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "../video-card/VideoCard";
import axios from "../../request/axios";
 
import FlipMove from 'react-flip-move';

function Results({selectedOption}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
      return response;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
       <FlipMove>
       {movies.map((movie) => (
        <VideoCard key={movie.id}  movie={movie} />
      ))}
       </FlipMove>
  
    </div>
  );
}

export default Results;
