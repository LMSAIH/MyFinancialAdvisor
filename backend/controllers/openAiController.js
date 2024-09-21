const openai = require("../config/openaiConfig");

const generateMeta = async (req, res) => {
  const financialAdvise = req.body.message;
  const messageHistory = req.body.messages;
  const description = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      ...messageHistory, // Spreads the previous messages
      {
        role: "user",
        content: `You are a professional financial advisor, help with ${financialAdvise}. Be concise, precise, and brief in your answer. Do not mention that you are a professional financial advisor.`,
      },
    ],
    max_tokens: 100,
  });

  res.status(200).json({
    aibot: description.choices[0].message.content,
  });
};

module.exports = { generateMeta };
