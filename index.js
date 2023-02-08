const cors=require('cors')



// const dataService = require('./service/dataService')
const dataService =require('./services/dataService')

// import express
const express=require('express')

// create app
const app = express()

// connect
app.use(cors({origin:'http://localhost:4200'}))
const { json } = require('express')

app.use(express.json())
// request

// addtocart
app.post('/addtocart',(req,res)=>{
    dataService.addtocart(req.body.productName,req.body.quantity,req.body.price).then(result => {
        // result.status(user.statusCode).json(result)
        res.json(result)
    })
})


app.post('/getCart',(req,res)=>{
    dataService.getCart().then(result=>{
        res.json(result)
    })
})
app.delete('/deleteCartitems',(req,res)=>{
    dataService.deleteCartitems().then(result=>{
        res.json(result)
    })
})


// app.post('/CartDeatails',(req,res)=>{
//     dataService.CartDeatails(req.body.productName).then(result=>{
//         res.json(result)
//     })
// })


// app.post('/register', (req, res) => {

//     dataService.register(req.body.acno, req.body.uname, req.body.psw).then(result => {
//       res.status(result.statusCode).json(result)
  
//     })
  
  
  
  
//   })


// set port







app.listen(3000,()=>{
    console.log("fg");
})