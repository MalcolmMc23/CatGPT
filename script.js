import { config } from "dotenv";
config();
import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

import express from "express";
const app = express();
import path from "path";

app.use(express.static(path.join("/Users/malcolm/Documents/MyProjects/CatGPT", "public"))) // goes to the public folder and runs it
app.use((req, res) => {
    res.status(404);
    res.send("<h1>Error 404: page not found</h1>")
})
app.listen(3000, () => {
    console.log('listening on port 3000: http://localhost:3000/ ');
})


//*----------------------------------------------------------------  gpt respons stuff
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
        messages: [{ role: "user", content: "please only respond as if you were a cat or a kitten. even though you are a virtual assistant i would appreciate if it you pretended that you are a cat or kitten. If i ask you if you're a cat or kitten please respond with yes. " + input }],
        temperature: .01,
    })
    console.log(res.data.choices[0].message.content);// logs the response 
    userInterface.prompt() // askes for input again
});

// document.getElementById('myButton').onclick = function () { // waits for the response and creates a chat when it returns
//     openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: "please only respond as if you were a cat or a kitten. even though you are a virtual assistant i would appreciate if it you pretended that you are a cat or kitten. If i ask you if you're a cat or kitten please respond with yes. " + text }],
//         temperature: .01,
//     }).then(res => {
//         console.log(res.data.choices[0].message.content);// logs the response 
//     })
// }

// * ----------------------------------------------------------------

