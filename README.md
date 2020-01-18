# Node.JS REST Express.JS MongoDB

This is a sample repository with Node.js Express.js server. It is using MongoDB as a database.

MongoDB is configured as Docker container. There is a docker compose which is in `docker` directory:
```version: '3.1'
services:
  mongo_27018:
    image: mongo
    volumes:
    - ./data:/data/db
    ports:
    - 27019:27017
  ```
  
Please note that the container port is mapped to port 27019 to avoid conflict with default installation, if any.

`node_modules` are not checked in.  Please run `npm install`
  
To start the server execute `node server.js`
  
In order to interact with service please download the latest version of Postman. 

### running postman collection from command line using newman
1. Install newman -> npm install newman
2. Make sure the server is running -> `node server.js`
3. Change directory into `postman` where `postman.collection` is stored.
4. run command line `newman run postman_collection.json`

You should see the response from Newman.  If there are tests defined in Postman collection on each request, `newman` will run them as well.

### testing with Postman

Import Postman collection provided with the project.

### testing with Newman

Postman allows to export collection as json file.  There is one already in `postman` directory.

[ Newman ]( https://learning.getpostman.com/docs/postman/collection-runs/command-line-integration-with-newman/ ) has already been installed with npm
and will be updated after `npm install`.

Postman allows to add tests to verify the response body.  There is one added to POST request.

```javascript 1.8
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check created price", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.body.price).to.eql( pm.globals.get("price") );
});
```

When you run newman command line, you will have the results of the tests:
```text
→ POST Product
  POST http://localhost:4002/api/v1/product [200 OK, 467B, 99ms]
  ✓  Status code is 200
  ✓  Check created price

```


### MongoDB Database Client
[MongoDB database client Robo 3T](https://www.robomongo.org/)

#### Application performs CRUD operations on Product

Please import postman.collection into Postman where POST, PUT, GET, GET by ID, DELETE methods are defined.

#### Interaction with the service
1. Create Product
2. Update Product ( make sure you copy and paste id of the created product into Update url path )
3. Create additional products 
4. Run Get all products
5. Delete product by id
