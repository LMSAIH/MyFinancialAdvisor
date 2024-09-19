const { OpenAI } = require('openai');
require('dotenv').config();

const client = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY, // This is the default and can be omitted
  });


module.exports = client;
