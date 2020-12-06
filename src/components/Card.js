import React from 'react';
const Card = props => {
  const path = require.context('../images/', true);

  return (
    <div className="card-container">
      <span> {props.description} </span>
      {props.link ? <a className="card-link" rel="noopener noreferrer" target="_blank" href={props.link} >{props.linkMsg}</a> : ''}
      <div className="card-container-img">
        {props.linkImage ? <img src={path('./'+props.linkImage)} alt={props.linkImage}/> : ''}
      </div>
    </div>
  );
};


export default Card;