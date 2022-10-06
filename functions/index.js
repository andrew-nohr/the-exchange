const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51LjnitJtDe1rNEud9wnsE2fS7060F0j3Mx2HmCyXpHvTBMTuhlmfggPzh7y85kv4lm9RCy3RlFl77quds1kDB72700cBTNmpjG")


// API 


// App Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (request , response) => response.status(200).send('Hello World'));

// Listen Command
exports.api = functions.https.onRequest(app)