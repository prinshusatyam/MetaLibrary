// Load required modules
const http = require("http");                 // http server core module
const path = require("path");
const express = require("express");           // web framework external module     // EasyRTC external module
// To generate a certificate for local development with https, you can use
// https://github.com/FiloSottile/mkcert
// Then to enable https on the node server, uncomment the next lines
// and the webServer line down below.
// const https = require("https");
// const fs = require("fs");
// const privateKey = fs.readFileSync('server.key');
// const certificate = fs.readFileSync('server.cert');
// const credentials = { key: privateKey, cert: certificate };

// Set process name
process.title = "Meta Gallery";

// Get port or default to 8080
const port = process.env.PORT || 8080;

// Setup and configure Express http server.
const app = express();

// Serve the files from the public folder
app.use(express.static("public"));

// Start Express http server
const webServer = http.createServer(app);
// To enable https on the node server, comment the line above and uncomment the line below
// const webServer = https.createServer(credentials, app);


// Listen on port
webServer.listen(port, () => {
    console.log("listening on http://localhost:" + port);
});