import React from 'react';
import './usercard.css'
import {FaFile, FaArrowsAlt} from 'react-icons/fa';

const Card = (props) =>{

    return(
        <div className=" card  shadow">
            <div className="card-body text-dark">
            <h4><span style={{marginRight:"10px"}}><FaFile /></span>Documents <span style={{marginLeft:"80px"}}><FaArrowsAlt /></span> </h4>
            <hr />
            <h5>Vital Report<span style={{marginLeft: "150px"}}>7</span></h5>
            <p>London</p><br/>
            <p>VitalReport</p>
            <hr /> 
            <h5>EKG Report<span style={{marginLeft: "150px"}}>7</span></h5>
            <p>Location</p><br/>
            <p>test</p>                   
            </div>
            <a href="#" className="App"  onClick={props.handleUserCard}>X</a>
        </div>

    );
}

export default Card;