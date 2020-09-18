import { LitElement, html,  css} from 'lit-element';
import { router } from 'lit-element-router';
import './pages/about-me';
import './pages/resume-page';
import './pages/cat-list';
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
      hideLoading: { type: String }
    };
  }

  static get styles() {
    return [ RouterAppStyles,
    css`:host {
      display: block;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .router-app-content{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 1rem;
      height: 100vh;
    }
    `]
  }

  static get routes() {
    return [{
      name: 'me',
      pattern: '',
    }, {
      name: 'resume',
      pattern: 'resume'
    }, {
      name: 'cat',
      pattern: 'cat'
    },{
      name: 'work',
      pattern: 'work'
    }
  ];
  }
 
  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
    this.hideLoading = false;
  }
 
  async router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    await this.updateComplete;
    this._setActiveOption(this.route);
  }

  _setActiveOption(route) {
    route = route == 'me' ? '' : route;
    if(this.shadowRoot.querySelector('.activated')) {
      this.shadowRoot.querySelector('.router-app-link.activated').classList.remove('activated');
    }
    this.shadowRoot.querySelector(`.router-app-link[href="${'/'+route}"]`).classList.add('activated');
  }

  updated() {
    this._hideSpinner();
  }

  async _hideSpinner() {
    await this.updateComplete;
    this.hideLoading = true;
  }

  get loadingTemplate() {
    return this.hideLoading
      ? ''
      : html`
      <div class="loading-wrapper">
        <div class="loading">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      ${this.loadingTemplate}
      <div class="router-app-content">
        <nav class="router-app-nav">
          <app-link class="router-app-link" href="/">About Me</app-link>
          <app-link class="router-app-link" href="/resume">Resume</app-link>
          <app-link class="router-app-link" href="/work">Some work</app-link>
          <app-link class="router-app-link" href="/cat">Curious Cat</app-link>
        </nav>

        <app-main active-route=${this.route}>
          <app-main route='me'>
            <about-me .information="${information}"></about-me>
          </app-main>
          <app-main route='resume'>
            <resume-page .information="${information}"></resume-page>
          </app-main>
          <app-main route='work'>
            <cat-list
              .list="${information.listWork}"
            ></cat-list>
          </app-main>
          <app-main route='cat'>
            <cat-list
              .list="${information.catList}"
            ></cat-list>
          </app-main>
        <div class="copyright-msg">
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>.
          <span class="">&copy;2020 Gaby Guzman. Creative Commons License</span>
        </div>
      </div>
      <footer class="contact">
          <ul-list
            .list="${information.contact}"
            online= true
          ></ul-list>
        </footer>
    `;
  }
}
 
customElements.define('router-app', App);