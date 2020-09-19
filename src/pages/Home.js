import React from 'react';

const Home = props => {
  const path = require.context('../images/', true);

  const getImg = (item) => <img alt={item} key={item} src={path('./'+item)}  />;

  return (
    <div className="container container-home">
      <div className="container-img-me">
        {getImg(props.me)}
      </div>
      <div className="container-text-me">
        <p className="bigger-text">{props.title}</p>
        <p className="primary-text">{props.subtitle}</p>
        <span className="cursive-dark-text">{props.paragraph}</span>
      </div>
    </div>
  );
};


export default Home;