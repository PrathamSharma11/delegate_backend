const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./configure/db');


//env config
dotenv.config()


//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//rest object
const app = express()

//mongodb connection
connectDB();


//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/blog",blogRoutes);


//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(
        `server running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan.white
        );
});

//npm run server or nodemon = to run the server
//localhost:8080 = in browser