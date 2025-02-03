const express = require('express');

const app = express();

const PORT = 8000;

app.use(express.json());



app.post('/signup', (req,res) => {
    const {username, email, password, dateOfBirth} = req.body;
    
    
    if (!username) {
        return res.status(400).json({
            error: "Username cannot be empty"
        });
    }

    if(!email){
        return res.status(400).json({
            error: "Email cannot be empty"
        });
    }


    if(!password){
        return res.status(400).json({
            error: "Password cannot be empty"
        });
    }

    if(password.length < 8 || password.length >= 16){
        return res.status(400).json({
            error: "Password length should be greater than 8 or less than or equal to 16"

        })

    }

    res.status(201).json({
        message: "User registered",
        user: {
            username,
            email,
            dateOfBirth
        }
        
    })

})



app.get('/', (req, res) => {
  res.send('welcome to my express server');
});

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)

})