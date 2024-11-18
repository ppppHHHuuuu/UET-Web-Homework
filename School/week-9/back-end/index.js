const express = require( 'express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const secret = 'secret';
const usernameEncodedArray = [];
app.use(bodyParser.json());
app.use(cors())
app.post('/register',(req,res)=>{
    const {username, password} = req.body;    
    const usernameEncoding = jwt.sign({username}, secret);
    usernameEncodedArray.push(username);
    console.log("usernameEncodedArray", usernameEncodedArray)
    res.status(200).send({usernameEncoded: usernameEncoding});
})

app.post('/login',(req,res)=>{
    const {token} = req.body; 
    if (!token) {
        res.status(400).send({error: "Empty username"})
    }
    const decodedUsername = jwt.verify(token, secret).username;
    
    if (!usernameEncodedArray.includes(decodedUsername)){ 
        res.status(401).send({error: "Wrong username"})
    }
    else {
        res.status(200).send({message: "Oke, Login Successfully"})
    }
})  


app.listen( port ,()=>{
    console.log('server is running at port number 3000')
});