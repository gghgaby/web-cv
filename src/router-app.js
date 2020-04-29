import { LitElement, html,  css} from 'lit-element';
import { router } from 'lit-element-router';
import './components/wrapper-content';
import './components/ul-list';
import './components/app-link';
import './components/app-main';
import {information} from './components/personal-info';
import { RouterAppStyles } from './components/router-app-styles.js';
 
 
class App extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      title: { type: String },
      subtitleMe: { type: String },
      aboutMe: { type: String },
      subtitleResume: { type: String },
      aboutResume: { type: String },
      img: { type: String }
    };
  }

  static get styles() {
    return [ RouterAppStyles,
    css`:host {
      display: block;
    }`]
  }

  static get routes() {
    return [{
      name: 'me',
      pattern: '',
    }, {
      name: 'resume',
      pattern: 'resume'
    }, {
      name: 'projects',
      pattern: 'projects'
    }];
  }
 
  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};

    let {title = '', subtitleMe = '', aboutMe = '', subtitleResume = '', aboutResume = '', img = ''} = information;
    this.title = title;
    this.subtitleMe = subtitleMe;
    this.aboutMe = aboutMe;
    this.subtitleResume = subtitleResume;
    this.aboutResume = aboutResume;
    this.img =  img;
  }
 
  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }
 
  render() {
    return html`
      <nav class="router-app-nav">
        <app-link class="router-app-link" href="/">About Me</app-link>
        <app-link class="router-app-link" href="/resume">Resume</app-link>
        <app-link class="router-app-link" href="/projects">Some works</app-link>
      </nav>

      <app-main active-route=${this.route}>
        <app-main route='me'>
          <section class="wrapper-content-me">
            <div class="tape uno">
              <img class="img-me" src=${this.img} alt="me" title="Gaby">
            </div>
            <section class="text-me">
              <p class="greeting">Hi!</p>
              <h3>${this.title}</h3>
              <p>${this.aboutMe}</p>
            </section>
          </section>
        </app-main>
        <app-main route='resume'>
          <section class="wrapper-content-resume">
            <p class="text-resume">${this.aboutResume }</p>
            <div class="resume-tech">
              <img class="img-stack" src="./src/images/stack.png" alt="javascript" title="js">
            </div>
          </section>
        </app-main>
        <app-main route='projects'>
          <section class="wrapper-content-projects">
          <ul-list
            slot="things"
            title="Curious Cat List"
            list='[{ "link": "https://www.youtube.com/watch?v=R2zJZtFHG4M", "text": "I spoke in DevDay For Women 2019"}, {"link": "https://medium.com/@gghbit/uso-de-la-coerci%C3%B3n-y-es6-para-los-ut-3a43b383cf0", "text": "Write (spanish) in Medium about a lot of things"}]'
          ></ul-list>
            <br> <h2>EN CONSTRUCCIÓN...</h2>
          </section>
        </app-main>
      </app-main>
      <footer class="contact">
        <ul-list
          online= true
        ></ul-list>
      </footer>
    `;
  }
}
 
customElements.define('router-app', App);