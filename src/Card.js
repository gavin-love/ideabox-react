import React from 'react'; 

const Card = props => {
  return(
    <li>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </li>
  )
} 

export default Card;