const APIKEY = "LQdXhDIH9sPa12BFcZ6e3DdCWhREyOG2LY3fBNMQ"

$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`,
}).then((data) => {
  console.log(data)
})