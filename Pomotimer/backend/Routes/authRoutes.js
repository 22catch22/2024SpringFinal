const express = require ('express');
const Router = express.Router();
const dotenc = require ('dotenv').config();
const cors = require('cors');
const {createProfile, loginuserProfile, getFinalUser} = require('../Controllers') 

Router.use 
(
cors({
credentials:true,
origin: 'http://localhost:5173'
})
)
Router.get('/');
Router.get('/finalusers', getFinalUser);
 
Router.post('/CreateProfile', createProfile);
Router.post('/loginuserprofile', loginuserProfile);
 

module.exports  = Router