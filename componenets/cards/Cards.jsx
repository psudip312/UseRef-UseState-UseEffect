import React from 'react'
import p from "./oo.jpg"
import "./Cards.css"
const Cards = () => {
  return (
    <>
    <h2>User Profile Card</h2>

    <div class="card">
    <img src={p} alt="John"/>
    <h1>Name:</h1>
    <p class="title">CEO & Founder, Example</p>
    <p>Harvard University</p>
    <div >
      <a href="#"><i class="fa fa-dribbble"></i></a> 
      <a href="#"><i class="fa fa-twitter"></i></a>  
      <a href="#"><i class="fa fa-linkedin"></i></a>  
      <a href="#"><i class="fa fa-facebook"></i></a> 
    </div>
    <p><button>Contact</button></p>
  </div>
    </>
  )
}

export default Cards