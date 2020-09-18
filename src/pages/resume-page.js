import { LitElement, html, css } from 'lit-element';
import { RouterAppStyles } from '../components/router-app-styles.js';

class ResumePage  extends LitElement {

  static get styles() {
    return [ RouterAppStyles,
      css`:host {
        display: block;
        
      }`]
  }

  static get properties() {
    return {
      information: { type: Object },
      aboutResume: { type: String }
    };
  }

  constructor() {
    super();
    this.information = {};
  }

  updated(changedProps){
    if(changedProps.has('information')) {
      let {aboutResume = ''} = this.information;
      this.aboutResume = aboutResume;
    }
  }

  render() {
    return html`
      <section class="wrapper-content-resume">
        <p class="text-resume">${this.aboutResume }</p>
        <div class="resume-tech">
          <img class="img-stack" src="./src/images/stack.png" alt="javascript" title="js">
        </div>
      </section>
    `;
  }
}

customElements.define('resume-page', ResumePage);