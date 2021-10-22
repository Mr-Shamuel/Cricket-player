import React from 'react';
import playerData from '../../fakedata/data.json';
import { useState } from 'react';
import Player from '../Player/Player';
import './Menu.css';
import Cart from '../Cart/Cart'


const Menu = () => {

    const [players, setPlayers] = useState(playerData);
        const [cart,setCart] =useState([])


   const handlePlayer =(playerinfo)=>{
       console.log("Added!!",playerinfo.first_name);
      const newCart =[...cart,playerinfo];
      setCart(newCart);
   }




    return (
        <div>
          
            

            <div  className="menuContainer">

               
                    <div className="playercontainer">
                        {
                            players.map(player => <Player playerinfo={player} key={player.id}  handlePlayer ={handlePlayer }  ></Player>)
                        }

                    </div>

                    <div className="cart">
                   
                        <Cart cart={cart} players={players} ></Cart>

                    </div>
                

            </div>








        </div>
    );
};

export default Menu;