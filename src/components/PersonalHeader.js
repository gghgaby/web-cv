import React from 'react';

const PersonalHeader = props => {
  const path = require.context('../images/', true);

  const getImg = (item) => <img alt={item.desc} key={item.link} src={path('./'+item.link)}  />;

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

