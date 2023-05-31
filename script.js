import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai";

import readline from "readline"

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY,
}));

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})
userInterface.prompt() // creates a user input prompt 
userInterface.on('line', async input => { // waits for the response and creates a chat when it returns
    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "please only respond as if you were a cat. " + input }]
    })
    console.log(res.data.choices[0].message.content);// logs the response 
    userInterface.prompt() // askes for input again
});


