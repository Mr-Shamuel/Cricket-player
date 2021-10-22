import React from 'react';
import'./Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log("hiss",cart);
   
    const  players= props.players;
    console.log("hi",players);

    

    

    const totalSalaries = cart.reduce((totalSalaries,element) => totalSalaries + element.salary,0)
    console.log(totalSalaries);
    return (
        <div className="playerDetails">
            <h1>Player Details : </h1>
            <h2>Total Player : { players.length} </h2>
            <h4>Total Player Added :{cart.length} </h4>
            <h4>Total Salaries: {totalSalaries} k</h4>
            <h5>Selected player :</h5>
            <ul className="playerName" >
                
                 {
               
                cart.map(x=><li >{x.first_name}</li> )
                    
                 }
                
            </ul>
              
            
     
               
            
        </div>
    );
};

export default Cart;