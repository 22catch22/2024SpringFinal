const mongoose = require('mongoose')
const {Schema} = mongoose

const FinalUserSchema = new Schema({
Username: String,
email:
{
type:String,
unique:true
},
password: String,
 
pomos: []


})



const FinalUserModel = mongoose.model('FinalUser', FinalUserSchema);

module.exports = FinalUserModel;