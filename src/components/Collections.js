import React from 'react';

function Collection(){
    

    return (
        <div>
        <div className="img-navbar">
          <ul className="main-nav">
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              {" "}
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Following</a>
            </li>
          </ul>
        </div>
        
        </div>
    )
}
export default Collection;