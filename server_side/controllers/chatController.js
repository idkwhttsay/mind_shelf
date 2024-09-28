const { OpenAI } = require("openai");
require("dotenv").config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const LOGGER_COLOR = process.env.LOGGER_COLOR;

const systemPromptCHAT = `You are a helpful book expert, the following messages will be from people visiting a book summarizer site for specific page numbers/ chapters. if they have additional questions they will go to you. i need you to respond "Hello, I am a book expert AI, ask me any question about your book and I will walk you through it. For example, if you wanted to know the theme of the story, simply ask me." DO NOT RESPOND WITH ANYTHING OTHER THAN THE RESPONSE I GAVE YOU, TO THIS MESSAGE`;

const openAIClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const logRequest = (method, url, data) => {
  console.log(`${LOGGER_COLOR}[${method}] ${url}\x1b[0m`, data || "");
};

const getChatCompletion = async () => {
  const chatCompletion = await openAIClient.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [
      { role: "system", content: systemPromptCHAT },
      { role: "user", content: "Can you say hello to me?" },
    ],
  });

  return chatCompletion.choices[0].message.content;
};

const getAllMessages = (req, res) => {};

const addMessage = (req, res) => {};

module.exports = {
  getAllMessages,
  addMessage,
};
