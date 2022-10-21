class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <a href="#mainContent" tabindex="0" class="skip-content">Skip to Content</a>
        <header class="app-bar">
          <div class="app-bar_inner">
            <h1 class="app-bar_title"><a href="">Hunger Apps</a></h1>
          </div>
          <button id="menu" aria-label="nav-bar_menu" class="app-bar_menu">
            ≡
          </button>
          <nav id="drawer" class="nav">
            <ul class="nav_list">
              <li class="nav_item"><a href="#/home">Home</a></li>
              <li class="nav_item"><a href="#/favorites">Favorites</a></li>
              <li class="nav_item">
                <a href="https://www.linkedin.com/in/lukman-nur-hakim-0b6b4a247"
                  >About Me</a
                >
              </li>
            </ul>
          </nav>
        </header>
        `
  }
}

customElements.define('app-bar', AppBar)
