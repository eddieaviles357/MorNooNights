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
    {/* <ul onClick={handleClick} className="Categories d-flex flex-column justify-content-evenly align-items-center flex-wrap p-2">
      <li data-category={"business"}>business</li>
      <li data-category={"entertainment"}>entertainment</li>
      <li data-category={"food"}>food</li>
      <li data-category={"politics"}>politics</li>
      <li data-category={"science"}>science</li>
      <li data-category={"sports"}>sports</li>
      <li data-category={"tech"}>tech</li>
      <li data-category={"travel"}>travel</li>
    </ul> */}
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