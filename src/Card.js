import React from 'react'; 

const Card = props => {
  return(
    <ul>
      <li>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </li>
    </ul>
  )
} 

export default Card;