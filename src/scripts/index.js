import 'regenerator-runtime' /* for async await transpile */
import '../styles/minified.css'
import '../styles/responsive-minified.css'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from './views/app'
import swRegister from './utils/sw-register'
import '../scripts/views/components/app-bar'
import '../scripts/views/components/jumbotron-bar'
import '../scripts/views/components/footer-bar'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
