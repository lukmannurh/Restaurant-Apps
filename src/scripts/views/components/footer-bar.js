class FooterBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <p>Copyright &copy; 2022 - Hunger Apps</p>
        `
  }
}

customElements.define('footer-bar', FooterBar)
