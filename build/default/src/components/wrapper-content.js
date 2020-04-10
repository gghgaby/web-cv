import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import { information } from "./personal-info.js";
import { wrapperContentStyles } from './wrapper-content-styles.js';

class WrapperContent extends LitElement {
  static get styles() {
    return [wrapperContentStyles, css`:host {
      display: block;
    }`];
  }

  static get properties() {
    return {
      subtitleMe: {
        type: String
      },
      aboutMe: {
        type: String
      },
      subtitleResume: {
        type: String
      },
      aboutResume: {
        type: String
      },
      img: {
        type: String
      }
    };
  }

  constructor() {
    super();
    let {
      subtitleMe = '',
      aboutMe = '',
      subtitleResume = '',
      aboutResume = '',
      img = ''
    } = information;
    this.subtitleMe = subtitleMe;
    this.aboutMe = aboutMe;
    this.subtitleResume = subtitleResume;
    this.aboutResume = aboutResume;
    this.img = img;
  }

  render() {
    return html`
      <div class="wrapper-content">
        <section class="wrapper-content__me">
          <h1> ${this.title} </h1>
          <article class="wrapper-content__subme">
            <img src=${this.img} alt="me" title="dollify avatar">
            <h3>${this.subtitleMe}</h3>
            <section>
              ${this.aboutMe}
            </section>
          </article>
        </section>
        <section class="wrapper-content__resume">
          <h3>${this.subtitleResume}</h3>
          <section>
            ${this.aboutResume}
          </section>
          <slot name="things"></slot>
        </section>
      </div>
    `;
  }

}

customElements.define('wrapper-content', WrapperContent);