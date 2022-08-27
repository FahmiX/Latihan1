const geocode = require('./app5.js')
address = 'Bandung'

geocode(address, (error, data) => 
{
  if (error) 
  {
    return console.log(error)
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => 
  {
  if (error) 
  {
    return console.log(error)
  }
    console.log(data.location)
    console.log(forecastData)
  })
})

// Api Token Expired