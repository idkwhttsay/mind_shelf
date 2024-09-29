const { OpenAI } = require("openai");
const removeMd = require("remove-markdown");
require("dotenv").config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const systemPromptSum = `You are a helpful book expert. You have read every book on the internet and can provide detailed summaries of any book. The following messages will be from people visiting a book summarizer site for specific page numbers/ chapters.`;
const systemPromptCHAT = `You are a helpful book expert, the following messages will be from people visiting a book summarizer site for specific page numbers/ chapters. if they have additional questions they will go to you. i need you to respond "Hello, I am a book expert AI, ask me any question about your book and I will walk you through it. For example, if you wanted to know the theme of the story, simply ask me." DO NOT RESPOND WITH ANYTHING OTHER THAN THE RESPONSE I GAVE YOU, TO THIS MESSAGE`;

const systemPromptBookCover =
  "You are a tool to find images of book covers in the internet for book user will provide. You should only output the link and nothing else.";

const openAIClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const getSumCompletion = async (bookName, pageNumber) => {
  const chatCompletion = await openAIClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPromptSum },
      {
        role: "user",
        content: `I have been reading the book ${bookName} up to page ${pageNumber} and i have been busy so i have not been able to continue reading in a while. I feel i have forgotten all the little intricacies of the story. can you give me a summary so that I can continue reading from that page without missing anything and feel immersed in the story once again?. can you include sub points like ,a main overview, and key events leading up to the page. can you leave out any comments like "sure here\'s your summary" or "let me know if you need any clarifications? can you also make sure it\'s at least 500 words long?`,
      },
    ],
  });

  return removeMd(chatCompletion.choices[0].message.content);
};

const getBookCover = async (bookName) => {
  const chatCompletion = await openAIClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: systemPromptBookCover,
      },
      {
        role: "user",
        content: `Generate me a link to the cover of the "${bookName}" book. OUTPUT ONLY THE IMAGE LINK`,
      },
    ],
  });

  const text = chatCompletion.choices[0].message.content;
  console.log(text);
  console.log(text.split(" ").find((word) => word.startsWith("http")));
  return text.split(" ").find((word) => word.startsWith("http"));
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

module.exports = {
  getBookCover,
  getSumCompletion,
  getChatCompletion,
};
