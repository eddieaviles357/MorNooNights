import React from "react";
import "./Categories.css";

function Categories( { clickHandler } ) {
  function handleClick(evt) {
    // get category from dataset and pass data to clickHandler
    const {category} = evt.target.dataset;
    clickHandler(category, 1, true);
  }
  return (
    <>
      <section 
        onClick={handleClick} 
        className="Categories d-flex flex-column justify-content-evenly align-items-center flex-wrap p-2">
        <div>
          <span data-category={"business"}>business</span>
          <span data-category={"entertainment"}>entertainment</span>
          <span data-category={"food"}>food</span>
          <span data-category={"politics"}>politics</span>
          <span data-category={"science"}>science</span>
          <span data-category={"sports"}>sports</span>
          <span data-category={"tech"}>tech</span>
          <span data-category={"travel"}>travel</span>
        </div>
      </section>
    </>
  )
}


export default Categories;