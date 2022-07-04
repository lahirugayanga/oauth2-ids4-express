# Getting started with Oauth2 with Passport

This project was created from NodeJs.


## Available scripts
In the project directory you can run:

### `npm run start`

Runs the application using `node` and listening to PORT 8000 or the PORT provided in the `.env` file.

### `npm run dev`

Runs the app using `nodemon` and listens to PORT 8000 or the PORT provided in the `.env` file.

## Getting started:

### Step 1 
  Replace the `SERVER_TOKEN_URL`, `SERVER_CLIENT_ID` and `SERVER_CLIENT_SECRET` with corresponding values related to identity server.
### Step 2
  Run the project using above mentioned commands.
### Step 3
  Send a request to `/oauth2` endpoint.

## Other packages used:

### [Axios](https://www.npmjs.com/package/axios)
Promise based HTTP client for the browser and node.js

### [Passport](https://www.npmjs.com/package/passport)
Express-compatible authentication middleware for Node.js.

### [Passport-oauth2-password-grant](https://www.npmjs.com/package/passport-oauth2-password-grant)
This module allows authentication through OAuth2 on servers which permit the 'password' grant type.

### [Cookie-session](https://www.npmjs.com/package/cookie-session)
Simple cookie-based session middleware.

