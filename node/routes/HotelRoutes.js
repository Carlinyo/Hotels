const express = require("express")
const router = express.Router()
const HotelController = require("../controllers/HotelController")




router.get("/getHotels", HotelController.getHotels)


module.exports = router