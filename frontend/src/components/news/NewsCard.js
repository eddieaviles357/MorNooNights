import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

import "./NewsCard.css";


/** Show limited information about a news article */

export default function NewsCard({ uuid, title, snippet, url, imageURL, publishedAt}) {
  const { visitedNews, setVisitedNews} = useContext(UserContext);
  console.log("NewsCard Rendered");

  const handleVisitedClick = () => {
    // if no data is available set to empty array
    const visited = JSON.parse(visitedNews) || [];
    
    // allows only 5 entries
    if(visited.length >= 5) visited.shift(); // remove 1st entry

    // stringify visited news and update values
    setVisitedNews( _ => JSON.stringify(
      [...visited, { uuid, vistedAt: new Date().toGMTString() }] )
    )
  }
  return (
    <div className="NewsCard">
      <div className="img-container">
        <img src={imageURL} alt={title} />
      </div>
      <div className="Body card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{snippet}</p>
        <p className="card-text fst-italic">Published: { new Date(publishedAt).toUTCString() }</p>
        <Link onClick={handleVisitedClick} className="Btn-tertiary btn" to={url} target="_blank">Read More</Link>
      </div>
    </div>
  );
};




{/* <Link className="NewsCard card" to={url}>
<div className="card-body">
  <h5 className="card-title">
    {title}
    <img src={image_url} alt={title} className="float-end ml-5" />
  </h5>
  <p><small>{description}</small></p>
</div>
</Link> */}