const app = express()

app.get('/', (request, response) => {
  response.send('hello')
})

// when it receives a ET for the root route of / that it should run my function.  
//this function is often referred to as a controller
//The controller function is going to be passed two things. First it will be passed the request,
//this is an object express made to represent in code the HTTP request packet the server received
//second parameter is a response object.  this is another expressed object but is loaded with data 
//and methods for crafting a response to the user

app.listen(3000)