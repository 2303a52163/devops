const mongoose = require("mongoose")

const InteractionSchema = new mongoose.Schema({

userId:String,

productId:String,

action:String,

date:{ type:Date, default:Date.now }

})

module.exports = mongoose.model("Interaction",InteractionSchema)