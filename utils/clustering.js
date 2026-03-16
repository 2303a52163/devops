function clusterUsers(users){

const clusters = {}

users.forEach(user=>{

user.interests.forEach(category=>{

if(!clusters[category]){

clusters[category] = []

}

clusters[category].push(user)

})

})

return clusters

}

module.exports = clusterUsers