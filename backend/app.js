const express = require('express');
const readline = require('readline');
const cors = require('cors');
const { generateMeta } = require('./controllers/openAiController');


const app = express();


//middleware
app.use(express.json());
app.use(cors());

app.listen(3000, () => {console.log('Cors enabled web server listening to port 3000')});
app.post('/openai/meta', generateMeta);


