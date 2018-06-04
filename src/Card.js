import React from 'react'; 

export const Card = props => {
  return(
    <ul>
      <li>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </li>
    </ul>
  )
} 