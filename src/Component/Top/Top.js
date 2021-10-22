import React from 'react';
import logo from '../../images/Bangladesh-Cricket-Team.png';
import './Top.css'
const Top = () => {
    return (
        <div>
           
            <div className="container">

<div className="headerPart">
    <ul>

        <li><a href="#contact">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#home">Home</a></li>


        <li style={{ float: "left" }}><a className="active" href="#about"> <img className="img-fluids" src={logo} alt="" /></a></li>
    </ul>


    <div className="websiteName">
    <marquee>
    Bangladesh Cricket Board
</marquee>
       
    </div>

    <h1 className=" w-mb-5 ">Select player</h1>

</div>

</div>
            
        </div>
    );
};

export default Top;