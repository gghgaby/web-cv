const icons = [{socialImg: 'telegram.png', desc: 'telegram', link: 'https://t.me/gabyguzh'},
{socialImg: 'linkedin.png', desc: 'linkedin-white', link:'https://www.linkedin.com/in/gabyguzmandev'},
{socialImg: 'gmail.png', desc: 'gmail-white', link: 'mailto:ggh.gabriela@gmail.com?Subject=Interesado%20en%20contactarte'},
{socialImg: 'github.png', desc: 'git-white', link: 'https://www.github.com/gabyguzmandev'}];

const projects = [{
    description: 'Simple administrator. #REACT, #CSS3, #HTML5',
    link: 'https://admon-pacientes-ghgaby.netlify.app/',
    linkMsg: 'See more...',
    gitPath: 'https://github.com/gabyguzmandev/react2020/tree/admon-pacientes',
    linkImage: 'github.png'
  }, {
    description: 'A Web Site to personal CV. #LitElement #WebComponents',
    link: 'https://lit-simple-cv.netlify.app/',
    linkMsg: 'See more...',
    gitPath: 'https://github.com/gabyguzmandev?tab=repositories',
    linkImage: 'github.png'
  }, {
    description: 'A talk for Dev Day for Women, 2019. #DevDay4Women #STEM',
    link: 'https://www.youtube.com/watch?v=R2zJZtFHG4M',
    linkMsg: 'Go to Youtube',
    linkImage: 'youtube.png'
  },
  {
    description: 'Coerción de manera simple : Es la acción de forzar a que un objeto se comporte como si fuera de otro tipo [ref].',
    link: 'https://medium.com/@gghbit/uso-de-la-coerci%C3%B3n-y-es6-para-los-ut-3a43b383cf0',
    linkMsg: 'Read more...',
    linkImage: 'medium.png'
  },
  {
    description: 'Un ternario podría ser opción, es más “limpio” visualmente y ahorramos algunas líneas de código, sin embargo al hacer UT, será necesario las dos pruebas, cuando x es verdadero y cuando x es falso.',
    link: 'https://gabyguzh.medium.com/peque%C3%B1as-curiosidades-con-javascript-2def20f0c4d9',
    linkMsg: 'Read more...',
    linkImage: 'medium.png'
  }
];

const text = `I work with HTML, CSS, LitElement, Polymer 1 and 2, GIT, SASS, Mocha and ChaiJS to UT, good practices to Front End, SCRUM Methodology, a bit Webpack, REACT JS. I like to learn more about other frameworks or libraries or architectures. I'm a enthusiastic, self learned, empathy developer and I don't afraid about new challenges.`;

const DATA = {
  icons,
  projects,
  text
}

export default DATA;
