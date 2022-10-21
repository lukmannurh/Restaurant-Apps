const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorites')
})

Scenario('Showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants')
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found')
})

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found')

  I.amOnPage('/')

  I.waitForElement('.restaurant-item_content_name a', 10)

  const firstRestaurant = locate('.restaurant-item_content_name a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.waitForElement('#likeButton', 10)
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.seeElement('.restaurant-item')

  const likedRestaurantTitle = await I.grabTextFrom(
    '.restaurant-item_content_name'
  )
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.waitForElement('.restaurant-item_content_name a', 10)

  const firstRestaurant = locate('.restaurant-item_content_name a').first()
  const firstRestaurantTitles = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.waitForElement('#likeButton', 10)
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.seeElement('.restaurant-item')

  const unlikedRestaurantTitles = await I.grabTextFrom(
    '.restaurant-item_content_name'
  )
  assert.strictEqual(firstRestaurantTitles, unlikedRestaurantTitles)

  I.seeElement('.restaurant-item_content_name a')
  await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorites')
  I.dontSeeElement('.restaurant-item')
})
