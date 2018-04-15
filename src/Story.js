import React from 'react';
import Author from './Author';

const Story = (props) => {
  return (
    <div className='Story story-container'>
      <img src={props.img} />
      <div className='story-info'>
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <Author 
          authImg={props.authImg}
          authName={props.authName}
          estTime={props.estTime}
        />
      </div>
    </div>
  )
}

export default Story;
