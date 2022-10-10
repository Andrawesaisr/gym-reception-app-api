const dotenv=require('dotenv')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/gym-data',{
    useUnifiedTopology:true,
    useNewUrlParser: true
})