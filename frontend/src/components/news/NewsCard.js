import React from "react";
import { Link } from "react-router-dom";

import "./NewsCard.css";


/** Show limited information about a news article */

function NewsCard({ 
    newsObj,
    updateRecentlyVisited
    }) {
  console.log("NewsCard Rendered");
  return (
    <div className="NewsCard">
      <figure className="img-container">
        <img src={newsObj.image_url} alt={newsObj.title} />
      </figure>
      <div className="Body card-body">
        <h5 className="card-title">{newsObj.title}</h5>
        <p className="card-text">{newsObj.snippet}</p>
        <p className="card-text fst-italic">Published: { new Date(newsObj.published_at).toDateString() }</p>
        <Link 
          onClick={() => updateRecentlyVisited(newsObj)} 
          className="Btn-tertiary btn" 
          to={newsObj.url} 
          target="_blank"
          >Read More</Link>
      </div>
    </div>
  );
};

export default NewsCard;