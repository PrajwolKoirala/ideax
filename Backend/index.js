


const express = require("express");
const cors = require('cors');
require("./config/database");

const fileUpload = require("express-fileupload");

const auth_route = require("./route/user")
const jobs_route = require("./route/jobs")
const apply_route = require("./route/applied_job");
const class_group_route = require("./route/onlineClassGropu")
const post_route = require("./route/postSomething")
const review_route = require("./route/review")

// const messagingGroup_route = require("./route/messagingGroup");
const onlineClassParticipationRoutes = require("./route/onlineClassParticipation");


require('dotenv').config()


const app = express();
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, 
}));

app.use(express.json());  // Parse JSON data//global middleware
app.use(express.urlencoded({ extended: true }));  // Parse 

app.use(fileUpload());//we can read data sent from form-data


app.use("/api", auth_route);
app.use("/api", jobs_route);
app.use("/api",apply_route);
app.use("/api",class_group_route);
// app.use("/api/messagingGroup", messagingGroup_route);
app.use("/api", onlineClassParticipationRoutes);
app.use("/api", post_route);
app.use("/api/review", review_route);








app.use((req,res) => {
  res.status(404).send({
    msg:"Resoursce not found"
  })
})

app.use((err,req,res,next) => {
  let status = 500;
  let msg = "SERVER error";
  let errors = [];
  if (err.name === "ValidationError"){
    status = 400;
    msg = "bad request"
    
    let error_arr = Object.entries(err.errors)
    let temp = []
    error_arr.forEach(el => {
        let obj = {}
        obj.params = el[0]
        obj.msg = el[1].message
        temp.push(obj)
    }); 
    errors = temp;
}
res.status(status).send({msg: msg , errors,error:err.message})
return;
})




app.listen(8020, () => {
    console.log("Server started");
});
