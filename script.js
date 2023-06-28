const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const port=8000;
const app=express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/contact', (req, res)=>{
    res.sendFile(path.join(__dirname, 'contact.html'));
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/concerns', {useNewUrlParser: true, useUnifiedTopology: true});
}

const querySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    concern: String
});

const userQuery= mongoose.model('userQuery', querySchema);

app.post('/contact', (req, res)=>{
    var newData=new userQuery(req.body);
    newData.save().then(()=>{
       res.send("Your query has been submitted successfully!");
    }).catch(()=>{
        res.send("Error in form submission");
    })

});



  





app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})