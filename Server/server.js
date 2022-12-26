const express=require('express')
const dotenv=require('dotenv')
const userrouter=require('./Routes/apirouter')
const mongoose=require('mongoose')
const cors=require('cors')
dotenv.config({path:'./config/.env'})
const port=process.env.PORT
const mongo=process.env.MONGO_URL

const app=express()
app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', false);
mongoose.connect(mongo,{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(console.log('mongodb is connected'))
app.use('/task',userrouter)
app.listen(port,(err)=>{
    if(err) throw err
    console.log(`server is running on the port ${port}`)
})