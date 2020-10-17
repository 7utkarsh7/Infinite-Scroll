import React, {useState, useEffect} from "react";
import "../styles.css";
import Navbar from "./Navbar";

import Unsplash from "./unsplash-img.js";
import Collection from "./Collections"
import Intro from "./Intro"
import axios from "axios";



export default function App() {
  const [images, setImages] = useState([]);
  useEffect(()=>{
    axios
    .get('https://api.unsplash.com/photos/random?client_id=_3PVBSMSoFtcx3Dd5g9T9njeQGy1mKAxUgAaFCzVTGQ&count=8')
    .then(res => setImages([...images,...res.data]))
  })

  return (
    <div className="App">
      <div className="background"></div>
      <div className="main">
        <Navbar />
        <Intro />
        <Collection />
        <div  className="image-grid">
        { images.map(image => (
          <Unsplash url={image.urls.thumb} key={image.id}/>
        ))}
        </div>
      </div>
      
      
    </div>
  );
}
