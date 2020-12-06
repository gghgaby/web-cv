import React from 'react';
const ListComponent = props => {
  const path = require.context('../images/', true);
  return (
    <li className="li-container">
      <div className="li-container-img">
        <img src={path('./'+props.linkImage)} alt={props.linkImage}/>
      </div>
      <span className="li-description"> 
        {props.description}
        {props.link ? <a className="li-link" rel="noopener noreferrer" target="_blank" href={props.link} >{` ${props.linkMsg}`}</a> : ''}
      </span>
    </li>
  );
};
export default ListComponent;