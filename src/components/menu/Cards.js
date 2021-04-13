import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'

const Cards = () => {
    const cardInfo =[
        {image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",title:"Cumi Bakar"},
        {image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350", title:"Cumi Cabe"},
        {image: "https://bit.ly/sage-adebayo",title:"Cumi Goreng"},
        {image: "https://bit.ly/sage-adebayo",title:"Cumi Taoge"},
    ];

    const renderCard=(card,index)=>{
        return(
        <div className="Deck" display="flex">
            <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                    </Card.Body>
            </Card>
        </div>
        )

    }
    return(
        <div className="Grid">
            {cardInfo.map(renderCard)}
        </div>
    )
}
export default Cards