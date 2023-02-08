//  import db.js
// const db = require('./db')
const db = require("./db")



// vegitable
addtocart = (productName, quantity, price) => {
    return db.Store.findOne({ productName }).then(user => {
        if(quantity>0){
            if (user) {
                    return {
                        statusCode: 401,
                        status: false,
                        message: "Already adde in cart"
                    }
                }
                else {
                    var quant = parseInt(quantity)
                   
                    const newitem = new db.Store({
                        productName,
                        totalPrice: price * quant,
                        quantity: quant
                       
        
                    })
                   
                    
                    // user.transaction.push({ type: 'CREDIT', amount: amnt })
                    newitem.save()
                    return {
                        statusCode: 200,
                        status: true,
                        message: "Product Added in cart"
        
        
                    }
                }

        }
        else{
            alert('Must add quantity')
        }
        // 
    })


}





getCart = () => {
    return db.Store.find().then(user => {
        if (user) {
            return {
                message: user
            }
        } else {
            return {
                
                message: "Empty Cart"
            }
        }
    })
}
deleteCartitems = ()=>{
    return db.Store.deleteMany().then(user=>{
        if(user){
            return{
                message:user
    
            }
        }
    })
}


// CartDeatails=(productName)=>{
//     return db.Store.findOne({productName}).then(user => {
//         if(user){
//             return {

//                                 statusCode: 200,
//                                 status: true,
//                                 message: user.viewCart
//                             }
//         }
//         else{
//             return {
//                                 statusCode: 401,
//                                 status: false,
//                                 message: "incurrect acnumber"
//                             }
//         }
//     })

// }
// gettransaction = (acno) => {
//     return db.User.findOne({ acno }).then(user => {
//         if (user) {
//             return {

//                 statusCode: 200,
//                 status: true,
//                 message: user.transaction
//             }

//         } else {
//             return {
//                 statusCode: 401,
//                 status: false,
//                 message: "incurrect acnumber"
//             }
//         }
//     // })

// db.User.findOne({ acno, password: psw }).then(user => {
// if (user) {
//     const token = jwt.sign({ currentAcno: acno }, 'secretkey123')
//     return {
//         statusCode: 200,
//         status: true,
//         message: "login success",
//         currentAcno:acno,
//         currentUser:user.username,
//         token
//     }


// }
module.exports = {
    addtocart,
    getCart,
    deleteCartitems
}