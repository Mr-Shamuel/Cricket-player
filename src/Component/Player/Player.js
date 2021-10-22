// import React, { useEffect, useState } from 'react';
// import xx from '../../images/Bangladesh-Cricket-Team.png'
import './Player.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import playerData from '../../fakedata/data.json'

const Player = (props) => {


    const { age, role, salary, image, first_name } = props.playerinfo;

    const handlePlayer  =props.handlePlayer;


    return (



       <div className="con">
            <div className="cards">
            <img className="" src={image} alt="player img" />
            <div className="">
                <h4 className="card-title">{first_name}</h4>
                <h6 className="card-text">Age: {age}</h6>
                <h6 className="card-text">Playing Role: {role}</h6>
                <h6 className="card-text">Salary: {salary} k</h6>

                <button className="AddBtn" onClick={()=>handlePlayer(props.playerinfo)}> Add Player</button>

            </div>
        </div>
       </div>



    );
};

export default Player;