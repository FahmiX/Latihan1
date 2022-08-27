const request = require('request')
const url = 'http://ipwho.is/'

request({ url: url }, (error, response) => 
{
  // Parse the response body from JSON string into JavaScript object
  const data = JSON.parse(response.body)
  
  // Will print the current IP to the console
  console.log(data.ip)
})