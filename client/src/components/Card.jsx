import React from "react";

const cell = {
    border: '2px solid black'
  }

export default function Card({ name, image, nickname }) {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{nickname}</h5>
            <img style={cell}  src={image} alt='img not found' width='200px' height='250px' />
        </div>
    )
}