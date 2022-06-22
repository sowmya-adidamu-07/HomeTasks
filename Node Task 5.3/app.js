const express = require("express");
const router = require('./routeController').router;
const users  = require("./userDetails/users").users;
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/', router);
app.use((err,req,res) =>{ //Error handling
    if(err){
      
        res.json({msg:`error encountered : ${err.message}`});
        res.statusCode = 500;

    }
});

app.listen(PORT,(req,res) =>{
    
    console.log(`The Express Server is running on port:${PORT}.can access by visiting http://localhost:${PORT}
    /getUser/Id -> to display userdetails with given ID
    /createUser -> to create a new user
    /updateUser/id -> update user with given ID
    /deleteUser/id -> delete user with given ID
    /getAutoSuggestUsers/:loginSubstring/:limit -> autosuggestion of users with loginsubstring and limit
    /* -> any other request  `);
});



