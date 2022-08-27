const geocode = require('./app5.js')

geocode('Boston', (error, data) => 
{
  console.log('Error', error)
  console.log('Data', data)
})

// Api Token Expired