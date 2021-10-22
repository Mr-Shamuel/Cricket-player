import React from 'react';
import Player from '../Player/Player';
import { useState } from 'react';
import playerData from '../../fakedata/data.json';
import Cart from '../Cart/Cart';

const Main = () => {

    
    const [cart,setCart] = useState([]);
  
    const first5= playerData.slice(0,12);
    const [player,setPlayer] = useState(first5);
   


    const handlePlayer= (playerinfo)=>{
        console.log("You just clicked!!");
        const newCart = [...cart,playerinfo];
        setCart(newCart);
      
       
    }



    const playerContainer={
      display: 'flex',
  
    }
  

    return (
        <div>
        
            
            
      <div className="playerContainer" style={playerContainer}>
        <div className="addplayer" style={{width:'70%'}}>
          {
            playerData.map(x => <Player 
                handlePlayer={handlePlayer}
            
            playerinfo={x} key={x.id}>

            </Player>)

          }

        </div>
        <div className="playercart">
          <Cart cart={cart} player={player}></Cart>
        </div>


      </div>


        </div>
    );
};

export default Main;