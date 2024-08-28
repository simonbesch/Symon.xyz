// Load the express module to create a web application

const express = require("express");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL, // keep this one, after checking the value in `server/.env`
      // "http://mysite.com",
      // "http://another-domain.com",
    ],
    credentials: true,
  })
);

app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.text());
// app.use(express.raw());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Import the API router
const apiRouter = require("./routers/api/router");

// Mount the API router under the "/api" endpoint
app.use("/api", apiRouter);

module.exports = app;
