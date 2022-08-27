const request = require('request')
const url = 'http://ipwho.is/'

request({ url: url, json: true }, (error, response) => 
{
  console.log('IP Address : ' + response.body.ip + '\n' +
              'Kota       : ' + response.body.city + '\n' +
              'Provinsi   : ' + response.body.region + '\n' +
              'Negara     : ' + response.body.country
              )

})