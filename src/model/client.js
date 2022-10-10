const mongoose=require('mongoose')

const clientSchema=new mongoose.Schema({
name:{
    type:String,
    trim:true
},
age:{
    type:Number
},
monthlySub:{
    type:Number
},
from:{
type:String
},
to:{
    type:String
},
invitations:{
    type:Number
},
cost:{
    type:String
}

})

const CLIENT=mongoose.model('CLIENT',clientSchema)

module.exports=CLIENT