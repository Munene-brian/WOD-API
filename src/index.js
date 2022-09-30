const express = require('express');
const app = express();

const v1Route = require("./v1/routers");
const v1WorkoutRouter = require ("./v1/routers/workRoutes")
const PORT = process.env.PORT || 3000


// app.get("/",(req,res)=>{
//     res.send("<h2>Working</h2>")
// });
// app.use("/api/v1",v1Route);
app.use("/api/v1/workouts",v1WorkoutRouter);

app.listen(PORT,()=>{
    console.log(PORT)
})