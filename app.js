import * as dotenv from "dotenv";
import {OpenAI} from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// assistant
openai.beta.assistants.create({
  name:"Economics Tutor",
  instructions:"you are an economics tutor",
  tools: [
    {
      type: "code_interpreter",
    },
  ],
  model:"gpt-4-1106-preview"
});

// create thread
const thread = await openai.beta.threads.create();

//creat message
const message = await openai.beta.threads.messages.create(thread.id,{
  role:"user",
  content:"What is 500 * 500?"
});

//run assistent
const run = await openai.beta.threads.runs.create(thread.is, {
  assistant_id: assistant.id,
  instructions:"Address the user as leon.",
});

console.log(run);