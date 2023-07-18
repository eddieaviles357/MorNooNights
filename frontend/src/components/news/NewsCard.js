import React from "react";
import { Link } from "react-router-dom";

import "./NewsCard.css";


/** Show limited information about a news article */

export default function NewsCard({ 
      uuid, title, description, keywords,
      snippet, url, language, source,
      locale, imageURL, publishedAt,
      categories = [] }) {
  console.log("NewsCard Rendered");
  return (
    <div className="NewsCard">
      <div className="img-container">
        <img src={imageURL} alt={title} />
      </div>
      <div className="Body card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{snippet}</p>
        <Link className="Btn-tertiary btn" to={url}>Read More</Link>
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