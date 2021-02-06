const express = require('express');
const dotenv = require('dotenv');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

async function dbConnect(){
  try{
    const con = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
  }catch(err){
    console.log(err);
  }
}
dbConnect();

function getStatus(){
    let status = mongoose.connection.readyState;
    if(status === 1){
      return "Database Connected";
    }else{
      return "Database not connected";
    }
}

app.get('/', (req, res) => {
  res.render("index", {databaseInfo: getStatus()});
});


app.listen(PORT, () => {
  console.log(`Server is up and running.`);
});
