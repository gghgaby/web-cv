import { LitElement, html, css } from 'lit-element';
import { RouterAppStyles } from '../components/router-app-styles.js';

class CatList  extends LitElement {

  static get styles() {
    return [ RouterAppStyles,
    css`:host {
      display: block;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .cat-list-wrapper{
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .cat-list-img-wrapper{
      flex: 0 0 360px;
      display: flex;
      align-items: center;
      position: relative;
      margin: 1rem;
    }
    .cat-list-text-wrapper{
      flex: 0 0 360px;
      padding: 1rem 2rem;
      margin: 1rem;
      border: 4px solid #ff7e67;
      border-radius: 8px;
      font-family: 'Overlock', cursive;
    }
    .cat-list-img{
      width: 100%;
    }
    .cat-list-element-desc{
      visibility: hidden;
    }
    .cat-list-element-desc > * {
      padding: 2rem;
    }
    .cat-list-img-wrapper.clicked{
      animation: effectCard 1s ease-in-out;
    }
    .cat-list-img-wrapper.clicked .cat-list-element-desc{
      visibility: visible;
      position: absolute;
      top: 0;
      background-color: rgba(255, 126, 103, 0.9);
      z-index: 4;
      display: flex;
      align-items: center;
      height: 100%;
      width: 100%;
      animation: hideShow 1s ease-out;
    }
    figcaption p, figcaption a {
      font-family: 'Overlock', cursive;
      font-size: 1rem;
      line-height: 2rem;
    }
    a {
        text-decoration: none;
        color: inherit;
      }
    a:hover {
        color: #FFF;
      }
      .cat-list-text-wrapper a:hover{
      color: #ff7e67;
    }
    @keyframes effectCard{
      0%{
        transform: rotateY(180deg);
      }
      100%{
        transform: rotateY(0deg);
      }
    }
    @keyframes hideShow{
      0%{
        visibility: hidden;
        opacity: 0;
      }
      100%{
        opacity: 0.9;
      }
    }
    `]
  }

  static get properties() {
    return {
      list: { type: Array },
    };
  }

  constructor() {
    super();
    this.list = [];
    this.textList = [];
  }

  updated(changedProps){
  }

  async clickedCard(evt) {
    await this.updateComplete;
    if(evt.target.outerHTML.slice(-2)!= 'a>') {
      let clicked = this.shadowRoot.querySelector('.cat-list-wrapper').querySelector('.clicked');
      if(clicked) {
        this.shadowRoot.querySelector('.cat-list-img-wrapper.clicked').classList.remove('clicked');
      }
      evt.target.parentElement.classList.add('clicked');
    }
  }

  render() {
    return html`
      <div class="cat-list-wrapper">
        ${
          this.list.map(item => 
            item.text
            ? html`<div class="cat-list-text-wrapper"><a target="_blank" href="${item.link}"><span .innerHTML="${item.text}"></span></a></div>`
            : html `
              <figure class="cat-list-img-wrapper" @click="${this.clickedCard}">
                <img class="cat-list-img" src="${item.img}" alt="kitty" title="${item.title}"/>
                <figcaption class="cat-list-element-desc">
                  ${item.link ? html`<a target="_blank" href="${item.link}" @click="${this.eventPreventClick}">${item.desc}</a>`: html`<p>${item.desc}</p>` }
                </figcaption>
              </figure>
              `)
        }
      </div>
    `;
  }
}

customElements.define('cat-list', CatList);