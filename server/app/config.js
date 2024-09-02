// Load the express module to create a web application

const express = require("express");

const app = express();

const cors = require("cors");

// Configuration des options CORS
const corsOptions = {
  origin: process.env.CLIENT_URL, // Remplacez par le domaine de votre frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Permet l'envoi des cookies et autres informations d'identification
  allowedHeaders: "Content-Type,Authorization",
};

// Utilisation du middleware CORS avec les options configurÃ©es
app.use(cors(corsOptions));

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
