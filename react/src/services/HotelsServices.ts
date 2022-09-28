import axiosClient from "../config/axios";


const getHotels = async() => {
 return await axiosClient.get('https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=MCLONGHM,WWPARVLP&adults=1&checkInDate=2022-11-22&roomQuantity=1&paymentPolicy=NONE&bestRateOnly=true',{
    headers:{
      "Authorization": "Bearer p75CwpSPiSgnZgusrLVITVcNANY2",
    }
  }).then((data)=>{
      data.data.data.map((data:any,index:number)=>{
        data.img="./images/hotel" + (index + 1)+ ".jpg"
      })
    return data.data
  })
}

const adHotels = async () => {
  return await axiosClient.get("https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode?latitude=41.397158&longitude=2.160873&radius=5&radiusUnit=KM&amenities=SPA&ratings=5",{
    headers:{
      "Authorization" : "Bearer p75CwpSPiSgnZgusrLVITVcNANY2"
    }
  }).then((data)=>{
    let arr=[]
    for ( let i =0; i < data.data.data.length; i++ ){
      if ( i <= 3 ) {
        arr.push(data.data.data[i])
        data.data.data[i].img = "/images/Main5img" + (i + 1) + ".jpg"
      }
    }
    return arr
  })
}

const testRequest = async (Loaction:string) => {
  console.log(Loaction)
  return await axiosClient.get(`http://api.openweathermap.org/geo/1.0/direct?q=${Loaction}&limit=1&appid=de51eb79b3e5185fe7ae0d26f8dd1e50`)
  .then((data)=>{
    return data.data
  })
}

const HotelsByGeo = async (lat:number,long:number)=>{
  return await axiosClient.get(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode?latitude=${lat}&longitude=${long}&radius=5&radiusUnit=KM&hotelSource=ALL`,{
    headers:{
      "Authorization" : "Bearer p75CwpSPiSgnZgusrLVITVcNANY2"
    }
  })
  .then((data)=>{
    return data.data.data
  })
}


export const HotelsServices = {
  getHotels,
  adHotels,
  testRequest,
  HotelsByGeo
}

// https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=MCLONGHM,WWPARVLP,XKPAR321,MCPARDTM,HSBCNARR&adults=1&checkInDate=2022-11-22&roomQuantity=1&paymentPolicy=NONE&bestRateOnly=true