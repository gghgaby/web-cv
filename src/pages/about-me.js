import { LitElement, html, css } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import { RouterAppStyles } from '../components/router-app-styles.js';

class AboutMe extends LitElement {

  static get styles() {
    return [ RouterAppStyles,
      css`:host {
        display: block;
      }

      .cohete-wrapper{
        transform: rotate(90deg);
        position: absolute;
        left: 0px;
        margin: 0;
        top: 5rem;
        animation: traveling 7s ease-in infinite;
      }
      .cohete-wrapper:before{
        content: '';
        height: 100%;
        width: 8px;
        /*background-color: orange;*/
        position: absolute;
        left: 50%;
        z-index: -1;
      }

      @keyframes traveling{
        0%{
          transform: rotate(90deg) translateY(0vw);
        }
        100%{
          transform: rotate(90deg) translateY(-100vw);
        }
      }
    `]
  }

  static get properties() {
    return {
      information: { type: Object },
      img: { type: String},
      title: { type: String },
      aboutMe: { type: String}
    };
  }

  constructor() {
    super();
    this.information = {};
  }

  updated(changedProps){
    if(changedProps.has('information')) {
      let {title = '', aboutMe = '', img = ''} = this.information;
      this.title = title;
      this.aboutMe = aboutMe;
      this.img =  img;
    }
  }

  render() {
    return html`
    <div class="cohete-wrapper">
      <img class="cohete" src="../src/images/astronave.png" alt= "Good Ware Astronave"></img>
    </div>
      <section class="wrapper-content-me">
        <div class="tape uno">
          <img class="img-me" src=${this.img} alt="me" title="Gaby">
        </div>
        <section class="text-me">
          <p class="greeting">Hi!</p>
          <h3>${this.title}</h3>
          ${unsafeHTML(this.aboutMe)}
        </section>
      </section>
    `;
  }
}

customElements.define('about-me', AboutMe);