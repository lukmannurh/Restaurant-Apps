import CONFIG from '../../global/config'

const createRestaurantDetailTemplate = restaurant => `
    <div class="restaurant-detail">
        <div class="restaurant-item-detail">
            <h2 class="restaurant_title">Restaurant Detail</h2>
            <img class="lazyload restaurant_poster" data-sizes="auto" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restaurant ${restaurant.name}, di kota ${restaurant.city}" />
        </div>
        <div class="restaurant_info">
            <h3 class="restaurant_name">Restaurant Name</h3>
            <p>${restaurant.name}</p>
            <h3>Address</h3>
            <p>${restaurant.address}, Kota ${restaurant.city}</p>
            <h3>Rating</h3>
            <p>⭐ ${restaurant.rating}</p>
            <h3>Category</h3>
            <p>${restaurant.categories.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
        </div>
        <div class="restaurant_menu">
            <h3>Foods</h3>
            <p class="foods">${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
            <h3>Drinks</h3>
            <p class="drinks">${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
        </div>
        <div class="restaurant_overview">
            <h3>Description</h3>
            <p>${restaurant.description}</p>
        </div>
        <div class="restaurant_review">
            <h3>Customer Review</h3>
            <div class="review_detail">
                ${restaurant.customerReviews.reduce((show, value) => show.concat(`
                <p class="review_name">${value.name}</p>
                <p class="review_comment">${value.review}</p>
                <p class="review_date">${value.date}</p>`), '')}
            </div>
        </div>
    </div>
    `

const createRestaurantItemTemplate = restaurant => `
    <div class="restaurant-item">
        <div class="restaurant-item_header">
            <figure>
                <img data-sizes="auto" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restaurant ${restaurant.name}, di kota ${restaurant.city}" height="200px" class="lazyload restaurant-item_header_poster" />
                <figcaption class="caption">${restaurant.city}</figcaption>
            </figure>
            <div class="restaurant-item_header_rating">
                <p>⭐<span class="restaurant-item_header_rating_score">${restaurant.rating}</span></p>
            </div>
        </div>
        <div class="restaurant-item_content">
            <h3 class="restaurant-item_content_name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <p>${restaurant.description.slice(0, 125)}...</p>
            <button class="btn"><a href="/#/detail/${restaurant.id}">Check Detail</a></button>
        </div>
    </div>
    `

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>`

const restaurantNotFound = () => '<div class="restaurant-item_not_found">Tidak ada restaurant untuk ditampilkan</div>'

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  restaurantNotFound
}
