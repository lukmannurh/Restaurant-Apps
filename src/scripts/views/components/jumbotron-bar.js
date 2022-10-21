class JumbotronBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="jumbotron">
        <div class="jumbotron_inner">
          <h2 class="jumbotron_title">
            Harga Kaki Lima <br /><span>Kualitas Bintang Lima</span>
          </h2>
        </div>
      </div>
      `
  }
}

customElements.define('jumbotron-bar', JumbotronBar)
