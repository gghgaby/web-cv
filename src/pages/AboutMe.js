import React from 'react';
function AboutMe(props) {
  return (
    <div className="container container-about-me">
      {props.customText ? <div className="container-custom-text">{props.customText} </div> : ''}
    </div>
  );
}

export default AboutMe;