function recommendProducts(user,products){

return products.filter(product =>
user.interests.includes(product.category)
)

}

module.exports = recommendProducts