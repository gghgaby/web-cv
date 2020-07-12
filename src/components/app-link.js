import { LitElement, html, css } from 'lit-element';
import { navigator } from 'lit-element-router';

class Link extends navigator(LitElement) {
    static get properties() {
        return {
            href: { type: String }
        };
    }
    static get styles() {
        return css`
          a {
            text-decoration: none;
            margin: 0 8px;
            color: #347474;
        }
    			a:hover {
					color: #ff7e67;
				}
        `
    }
    constructor() {
        super();
        this.href = '';
    }
    render() {
        return html`
            <a href='${this.href}' @click='${this.linkClick}'>
                <slot></slot>
            </a>
        `;
    }
    linkClick(event) {
        event.preventDefault();
        this.navigate(this.href);
    }
}
customElements.define('app-link', Link);