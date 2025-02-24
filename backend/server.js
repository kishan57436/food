import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import "dotenv/config";
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = 1200


// middleware 
app.use(express.json())
 app.use(cors(
  {
    orgin:process.env.frontend_url,
    credentials: true,
    // methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    // allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
  }
 
 ))
//  app.options("*", cors());




// app.use(
//   cors({
//     origin: "https://frontend-theta-eosin-95.vercel.app", // Allow your frontend
//     credentials: true, // Allow cookies/auth headers
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
//   })
// );

// {
//     "version": 2,
//     "builds": [
//         {
//             "src": "server.js",
//             "use": "@vercel/node",
//             "config": {
//                 "includeFiles": [
//                     "dist/**"
//                 ]
//             }
//         }
//     ],
//     "routes": [
//         {
//             "src": "/(.*)",
//             "dest": "server.js"
//         }
//     ]
// }




// db connnection
connectDB();


 // api endpoints
 app.use("/api/food",foodRouter)
 //app.use("/images",express.static('uploads'))
 app.use("/api/user",userRouter)
 app.use("/api/cart",cartRouter)
 app.use("/api/order",orderRouter)
 


app.get("/",(req,res)=>{
  res.send("API is really working")
})

app.listen(port,()=>
{
    console.log(`server started on http://localhost:${port}`)
})


// mongodb atlas project link
//     mongodb+srv://arunbana:Arun@1234@cluster0.mabvy.mongodb.net/?

