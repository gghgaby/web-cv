import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";
import { information } from "./personal-info.js";

class UlList extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        text-align: left;
      };
      ul{
        text-align: left;
      }
      .online {
        display: flex;
        justify-content: space-evenly;
        list-style-type:none;
        flex-wrap: wrap
      }
    `;
  }

  static get properties() {
    return {
      list: {
        type: Array
      },
      title: {
        type: String
      },
      online: {
        type: Boolean
      }
    };
  }

  constructor() {
    super();
    this.list = information.listCuriousCat || [];
    this.title = '';
    this.online = false;
  }

  render() {
    return html`
    <h4>${this.title}</h4>
      <ul class=${this.online ? 'online' : ''}>
      ${this.list.map(item => typeof item === 'string' ? html`<li>${item}</li>` : html`<li>
                <a href=${item.link} target="_blank">
                  <img src=${item.img} alt="pixel-perfect" title="socialnetwork">
                </a>
              </li>`)}
      </ul>
    `;
  }

}

customElements.define('ul-list', UlList);