const axios = require("axios")
const Amadeus=require("amadeus")
const { API_SECRET,API_KEY } = require("../config/config")
const amadeus = new Amadeus({
    clientId: API_KEY,
    clientSecret: API_SECRET,
  })
class HotelController {
  async getHotels(req,res){
    amadeus
  }
}


module.exports = new HotelController()