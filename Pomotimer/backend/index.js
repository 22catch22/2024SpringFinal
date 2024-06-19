const express = require('express');
const dotenv = require ('dotenv').config();
const cors = require('cors')

const {mongoose} = require('mongoose');
const mewantcookie = require('cookie-parser');
 
//setting up mongoose
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log ("Database has been Connected"))
.catch((err) => console.log('Database has NOT been connected', err))

const app = express();
//... and the endpoint stuff
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(mewantcookie());


app.use('/', require('./Routes/authRoutes'));
app.use('/createProfile', require('./Routes/authRoutes'));
app.use('/loginuserProfile', require ('./Routes/authRoutes'));
app.use('/getFinalUser', require('./Routes/authRoutes')) 


const port = process.env.port || 8813;
app.listen(port, () => console.log(`Server is running on '${port}'`))