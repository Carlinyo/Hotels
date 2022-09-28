const express=require("express")
const router = require("./routes/HotelRoutes")
const app=express()
const cors=require("cors")

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use("/",router)

app.listen(5001)