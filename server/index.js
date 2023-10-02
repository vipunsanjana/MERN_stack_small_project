const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("./db/mongoose");
const userRouter = require("./routes/user");


const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(userRouter);

const port = 4000;


app.listen(port,()=>{
    console.log("port is running " + port);
})