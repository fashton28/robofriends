


import React from 'react'
import './Card.css'

//Writing the functional component

const Card = (props) => {

    return(

        <div className = "bg-light-green dib br3 pa3 ma2 grow">

            
            <img alt = "robots" src  = {`https://robohash.org/${props.id}`}/>

            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>

            </div>





        </div>






    );




};

export default Card;