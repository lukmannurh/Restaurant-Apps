import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantItemTemplate, restaurantNotFound } from '../templates/template-creator'

const Favorites = {
  async render () {
    return `
      <div class="loader" id="loader"></div>
      <div class="content">
        <h2 class="content_heading">Your Favorites Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
      `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant()
    const restaurantContainer = document.querySelector('#restaurants')

    if (restaurants.length === 0) {
      restaurantContainer.innerHTML += restaurantNotFound()
    } else {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant)
      })
    }

    const loaderContainer = document.querySelector('#loader')
    loaderContainer.style.display = 'none'
  }
}

export default Favorites
