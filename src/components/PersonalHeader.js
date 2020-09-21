import React from 'react';
const PersonalHeader = props => {
  const path = require.context('../images/', true);
  const getImg = (item) => <a target="_blank" rel="external" href={item.link} key={item.link} > <img alt={item.desc} src={path('./'+item.socialImg)} /></a>;

  return (
    <header className="principal-header">
      <div className="container container-primary-text">
        <span className="primary-text">{props.title}</span><span className="secondary-text">{props.subtitle}</span>
      </div>
      <div className="container container-icons">
        {props.iterables.map(item => getImg(item))}
      </div>
    </header>
  );
};


export default PersonalHeader;



