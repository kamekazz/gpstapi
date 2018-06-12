const express = require('express')
const app = express();
const portURL = process.env.PORT || 3000

// settings

// middlewares

// route



app.listen(portURL, ()  => {
    console.log('express server up and running on port '+ portURL + '....');
    
})