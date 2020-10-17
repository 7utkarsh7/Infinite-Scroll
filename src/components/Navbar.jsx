import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCamera } from "@fortawesome/free-solid-svg-icons";
import Link from "./Links";
function navbar() {
  return (
    <header className="header">
      <h1 className="logo">
        <a href="#">
          <FontAwesomeIcon icon={faCamera} size="lg" />
        </a>
      </h1>
      <ul class="main-nav">
      <Link 
          item="Home"
        />
        <Link 
          item="Collections"
        />
        <Link 
          item="Explore"
        />
        <Link 
          item="Contact"
        />
        <li className="bell-icon">
          <FontAwesomeIcon icon={faBell} size="lg" color="gray" />
        </li>
      </ul>
    </header>
  );
}
export default navbar;
