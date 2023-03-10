const express=require("express");
const path=require("path")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app=express();
const staticPath=path.join(__dirname,"/");
app.use(express.static(staticPath));
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/voyage',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))


app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    db.collection('user').findOne({email:email},(err,collection)=>{
        if(err){
            res.send(err);
        }
        if(collection){
            if(collection.password===password)
            {
            res.redirect("/voyage/main/index.html")
            }
            else{
                res.send("Password Doesn't Match")
            }
        }
        else{
            res.send("Email Not Found")
            
        }});
    

}
);
app.post("/signup",(req,res)=>{
    const {username,email,password,} = req.body;
    db.collection('user').findOne({email:email},(err,collection)=>{
        if(err){
            res.send(err);
        }
        if(collection){
            res.send({message:"User Already Exists"});
        }
        else{
            var name = req.body.name;
            var email = req.body.email;
            var password = req.body.password;
            var username=req.body.username;
            var number=req.body.number;
    

    var data = {
        "name": name,
        "email" : email,
        "password": password,
        "username":username,
        "number":number

        
        
    }

    db.collection('user').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
        return res.redirect("/voyage/main/index.html")
    });
            
       }
    });
});

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/voyage/main/index.html');
}).listen(3000);