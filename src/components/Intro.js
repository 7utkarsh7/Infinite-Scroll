import React from "react";

function Intro(){

    return ( <div className="Intro">
    <div className="intro-text">
      <h1>Unsplash</h1>
      <p>Beautiful, free photos</p>
      <p>
        Gifted by the world's most generrous community of photographers
      </p>
    </div>
    <div class="searchBox">
      <center>
        <input
          id="searchInput"
          type="text"
          placeholder="Search free high-resolution photos"
        />
      </center>
    </div>
  </div>);
}
export default Intro;