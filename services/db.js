// server mongo db integration
const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost:27017/store',{useNewUrlParser:true})



const Store=mongoose.model('Store',{
    productName:String,
    totalPrice:Number,
    quantity:Number
    
})

module.exports={
    Store
}
