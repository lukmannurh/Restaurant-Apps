import RestaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <div class="loader" id="loader"></div>
      <div class="content">
        <h2 class="content_heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `
  },

  async afterRender () {
    const restaurantList = await RestaurantDbSource.restaurantList()
    const restaurantsContainer = document.querySelector('#restaurants')
    restaurantList.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant)
    })

    const loaderContainer = document.querySelector('#loader')
    loaderContainer.style.display = 'none'
  }
}

export default Home
