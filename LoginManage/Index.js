
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

1
const db = mysql.createPool({
    connectionLimit :10,
    host:            'localhost',
    user:            'root',
    password :       '12345678',
    database :       'login'
});


app.post('/signup', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email

    db.query("INSERT INTO accounts (username, email, password) Values (?, ?, ?)",[username,  email, password ] , (err, result) =>{
        if (err){
            console.log(err)
        }else{
            res.send({username: username})
        }
    }
)

})


app.post('/login', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email

    db.query("SELECT email, password From accounts WHERE email = ? AND password = ?",[ email, password ] , (err, result) =>{
        if (err){
            console.log(err)
            res.send({err: err})
         
        }else if (result.length == 0){
            res.send({message: "User Not Found"})
              console.log("User Not Found")
        }else{
            
            res.send({
          
           email: result[0].email,
            password: result[0].password,
            success: true,
            
        })
          console.log( "User Found" )
        }
    }
)
});


app.listen(8080,() => {
  console.log('server listening on port 8080')  
})