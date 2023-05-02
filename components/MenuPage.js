export class MenuPage extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM
    this.root = this.attachShadow({ mode: 'open' });
    const styles = document.createElement('style');
    this.root.appendChild(styles);

    // Connect CSS
    async function loadCSS() {
      const request = await fetch('/components/MenuPage.css');
      const css = await request.text();
      styles.textContent = css;
    }
    loadCSS();
  }
  // When the component is attached to the DOM
  connectedCallback() {
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}

customElements.define('menu-page', MenuPage);
