const express = require('express');
const cors = require('cors'); 
const { getTweets, getTweetsByUsername } = require('./services/database')

const app = express(); 

const PORT = 3000; 


app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Hello From Twitter API');
}); 

app.get('/tweets', async (req, res) => {
    const tweets = await getTweets(); 
    res.json(tweets); 
});  

app.get('/tweets/:username', async (req, res) => {
    const { username } = req.params; 
    const tweets = await getTweetsByUsername(username); 
    res.json(tweets);
}); 

app.listen(PORT, () => {
    console.log(`Twitter API listening on port: ${PORT}`); 
})