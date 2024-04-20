require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/routes');


const port = process.env.PORT || 3001;
app.use(cors())
app.use(bodyParser.json());


// Call the routers 
app.use(router);



// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});