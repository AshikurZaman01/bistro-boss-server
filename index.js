const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

//middlewears
app.use(cors());
app.use(express.json());