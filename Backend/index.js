const express = require("express");
const dbconnect = require("./config/database");
const cors = require("cors");
const app = express();
const cookiesParser = require("cookie-parser");

const path = require("path");


app.use((req, res, next) => {
 
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    
  })
);                                                                                                                               

require("dotenv").config();

app.use(express.json()); 
app.use(cookiesParser()); 
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App is listening at port no ${port}`);
});

dbconnect();


const routes = require("./routes/route");


app.use("/hc", routes);
app.get("/",(req,res)=>{
  res.send("Aastha");
})