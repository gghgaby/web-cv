import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListElement from '../components/ListElement';


const Projects = (props) => {
  return (
  <div className="container container-projects">
    <p className="primary-text title-projects">{props.title}</p>
    <div className="container">
        <ul className="ul-container">
        { props.cards.map(item => {
          let key = uuidv4();
          return <ListElement {...item} key={key}></ListElement>
        })}
        </ul>
    </div>
  </div>
  );
};
export default Projects;
