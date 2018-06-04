import React from 'react';
import Card from './Card';

const Ideas = props => {
  return (
    <ul>
    {
      props.ideas.map((idea, index) => {
        return (
          <Card
            title={idea.title}
            body={idea.body}
            key={index}
          />
        )
      })
    }
    </ul>
  )
}

export default Ideas;