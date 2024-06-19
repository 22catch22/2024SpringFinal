const jwt = require ('jsonwebtoken');

const { comparePassword, hashslingingPassword} = require ('./auth');
const { compare } = require('bcrypt');
const FinalUser = require('./models/finaluser');
const cookie = require ('cookie-parser')
 
const createProfile = async (req, res) => {

try{
    const {Username, email, password} = req.body;

if(!Username)
{return res.json({error: 'Please enter a valid username'})}

if (!email)
{return res.json({error: 'Please enter a valid email'})}

if (!password || password.length < 6)
{return res.json({error: 'Please enter a valid password with at least six characters'})}

const exist = await FinalUser.findOne({email});
if (exist)
{
return res.json ({
error: "I'm sorry, but that email address is already taken",
});}

//this creates a user in the database
const hashpassword = await hashslingingPassword


const fuser = await FinalUser.create
({
    Username,
    email,
    password: hashpassword,
     
});

return res.json(fuser);
} catch(error)
{console.log(error);
}
};
 
 

//logs in user

const loginuserProfile = async (req,res) => {
try{
const{email, password} = req.body;

const user = await FinalUser.findOne({email});
if(!user)
{return res.json
({error:"Sorry, but I can't find that user"})
}
 
//checks passwords
const matchmaker = await comparePassword(password, FinalUser.password)
if (matchmaker)
    {
        jwt.sign({email:FinalUser.email, id: FinalUser._id, username: FinalUser.Username},
        process.env.JWT_SECRET, {}, (error,token) => 
        {
        if(error) throw error;
        res.cookie('token', newtoken).json(user)
        })
    } 
  if (!matchmaker)
        {res.json({
error: "The Passwords do not match :("
})}
}   
catch(error)
{console.log(error)
}
}  

const getFinalUser = (req, res) =>
{const {newtoken} = req.cookies
 if (newtoken)
{jwt.verify(newtoken, process.env.JWT_SECRET,{},(error, finaluser)=> {
if (error) throw error;
res.json(finaluser)
 }
)}
else(res.json(null))
}
 

module.exports = {createProfile, loginuserProfile, getFinalUser}
