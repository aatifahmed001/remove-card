import React from 'react'
import {Card, Button} from 'react-bootstrap';

import Img1 from "./assets/Img1.jpg";
import Img2 from "./assets/Img1.jpg"
import Img3 from "./assets/Img1.jpg"

 const Cards = () => {
     const cardInfo = [
         {image: {Img1}, title:"First Image", text:"Some quick example text to build on the card title and make up the bulk of the card's content."},
         {image: {Img2}, title:"Second Image", text:"Some quick example text to build on the card title and make up the bulk of the card's content."},
         {image: {Img3}, title:"Third Image", text:"Some quick example text to build on the card title and make up the bulk of the card's content."}
     ];

  const renderCard = (card, index) =>{
      return(
        <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src={card.img} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                    {card.text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>
      );
  }
        return (
            <div className="App">
                {cardInfo.map(renderCard)}
            </div>
        )
}

export default Cards;
