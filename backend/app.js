const express = require('express');
const cors = require('cors');
const { generateMeta } = require('./controllers/openAiController');

//the express application
const app = express();


//middleware to get the json
app.use(express.json());
//enabling cors because otherwise it will cause a bug
app.use(cors());

app.listen(3000, () => {console.log('Cors enabled web server listening to port 3000')});
//post the api key
app.post('/openai/meta', generateMeta);


