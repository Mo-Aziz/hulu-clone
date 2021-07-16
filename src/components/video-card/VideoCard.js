import React,{ forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";


const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard =forwardRef(({ movie },  ref)=> {
  return (
    <div ref={ref} className="video__card">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
      />

      {/* truncating text to just one line */}
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />

      <h2>{movie.title || movie.original_name}</h2>
      <p  className="videoCard__stats">
        {/* {movie.media_type && `${movie.media_type} `} */}
        {movie.release_date || movie.first_air_date} &#9679;
       <div className="thump__up"><ThumbUpIcon />  </div>
        
        {movie.vote_count}
        
       
      </p>
    </div>
  );
});

export default VideoCard;
