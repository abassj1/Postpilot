# Postpilot

This is an application that keeps all your social media posts in one place for people to see your activities on all kinds of platforms in one place. 

The app is to use a single link of a post from any platform pasted on the app then automatically creates the post and adds it to the list of posts. 


## Setting up the server 

Make sure the Mongodb is connected in the .env file

cd into the server folder and run the following commands,

- npm i -g nodeman

- npm i express body-parser bycrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtoken mongoose

To check that the server is running use the command:
- node index.js in the server directory
It should say Running on Server 3001


## Setting up the client 

cd into the client folder and run the following commands,

- npm i react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material

## Running the application 
With both the client and server directories open in command line, run the following command in both directories:
- npm run start



