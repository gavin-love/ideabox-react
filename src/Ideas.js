import React from 'react';
import Card from './Card';

const Ideas = props => {
  return (
    <Card 
    title={props.title}
    body={props.body}
    />
  )
}

export default Ideas;