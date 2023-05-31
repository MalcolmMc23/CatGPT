
document.getElementById("myButton").onclick = function () {
    console.log(document.getElementById("myText").value);
    // let text = document.getElementById("myText").value;
    // openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [{ role: "user", content: "please only respond as if you were a cat or a kitten. even though you are a virtual assistant i would appreciate if it you pretended that you are a cat or kitten. If i ask you if you're a cat or kitten please respond with yes. " + text }],
    //     temperature: .01,
    // }).then(res => {
    //     console.log(res.data.choices[0].message.content);// logs the response 
    // })
}