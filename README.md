# Front End Assessment - Experienced

### Description
Create a front end application to show a feed of images. There is an existing API provided that the front end should call. 
Please use a major front end framework such as React/Angular/Vue. You are free to use any other supporting libraries 
such as redux, redux saga, UI component libraries, styled components etc. However it is not required to use these, use whatever 
you feel is necessary.  

### Details 
The api will return a feed of images URLs and a caption for each image. However retrieving the images on the server can take a few seconds 
therefore the response from the server will be a stream so that the front end can load an image as soon as it arrives. 
The server will return a stream of new line delimited JSON http://ndjson.org/ . The server url will be localhost:3001/feed 

### Running the server
Clone this repository and navigate to the server directory. Run the following commands.
*Node & NPM must be installed on your system.

Install Dependencies
```
npm install
```

Run the Server
```
npm run start
```
The server will run on http://localhost:3001 . To call the server API use http://localhost:3001/feed .
The API will return 20 items per page. To specify the page use the page parameter like so http://localhost:3001/feed?page=1
The number of feed items will be randomly generated.

### Requirements 

 - Create a front end application to display the feed of images returned from the server
 - The feed should be displayed as an infinite scroll 
 - When the user scrolls to the bottom of the feed a loading icon will appear while more items are being fetched.
 - When there are no more results display a message to inform the user that they have reached the end of the feed.
 - The results from the server should be displayed once they arrive in the stream. For example 
   when calling the API a feed object is returned, the image and caption of that object should be displayed in the UI immediately.
   do not call the API and wait the stream to close before displaying the the results in the UI.
 - Create instructions on how to run the app.

### Review Process 
We will review this assessment based on the following criteria

 - Successful implementation of all required features.
 - Code quality, cleanliness and readability.
 - How the code and application are tested.
 - Use of best practices and industry standards. 
 - The app should render correctly in Chrome and Mobile (using chrome dev tools)
