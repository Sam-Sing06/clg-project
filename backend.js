const express = require('express');
const app = express();
const usermodel = require('./models/usermodel')
const path = require('path');

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) =>{
    res.render("index");
})

app.get('/login', (req,res)=>{
    res.render("login");
})
app.get('/signup', (req,res)=>{
    res.render("signup");
})
app.post('/create',async (req,res)=>{
    let {name,email,passcode}=req.body;

    let createduser = await usermodel.create({
        name: name,
        email: email,
        password:passcode
    });
    res.send(createduser);
})

app.get('/edit',(req,res)=>{
    res.render("edit");
})
app.listen(3000);