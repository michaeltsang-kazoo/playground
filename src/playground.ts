import { inspect } from "util";
import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

openai.chat.completions
    .create({
        model: "gpt-3.5-turbo-0613",
        temperature: 0.8,
        messages: [
            {
                role: "user",
                content: "Say hello!",
            },
        ],
    })
    .then((response) => console.log(inspect(response, true, null, true)))
    .catch((error) => console.error(error));
