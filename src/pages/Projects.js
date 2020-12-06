import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';


const Projects = (props) => {
  return (
  <Fragment>
    <p className="primary-text title-projects">{props.title}</p>
    <div className="container container-projects">
      { props.cards.map(item => {
        let key = uuidv4();
        return <Card {...item} key={key}></Card>
      })}
    </div>
  </Fragment>
  );
};
export default Projects;
