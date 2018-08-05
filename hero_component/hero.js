customElements.define('hero-custom',
  class extends HTMLElement {
    constructor() {
      super();

      const divElem = document.createElement('div');
      const title = this.title;
      const imgUrl = this.imgUrl;
      divElem.innerHTML = `
      <div class="hero-component" style="background-image: url('${imgUrl}')">
        <div class="hero-divider">
            <h2 class="text-center">${title}</h2>
            <hr class="skewed-divider-top-light">
            <hr class="skewed-divider-bottom">
        </div>
      </div>`;

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(divElem);
    }
  }
);