import React from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "../assets/svg/search.svg";
import HeartIcon from "../assets/svg/heart.svg";
import PersonIcon from "../assets/svg/person.svg";
import CartIcon from "../assets/svg/cart.svg";
import CarIcon from "../assets/svg/car.svg";
import quickIcon from "../assets/svg/quickview.svg";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            About us
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contacts
                </a>
              </li>
              
              
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Logout
              </a>
            </li>
           
          </ul>
        </div>
      </nav>
</div>
)
}
      
export default Header
           
                     
                
            
          
         
  