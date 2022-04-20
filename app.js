const express = require('express');
const app = express();

app.use(express.json());

var data = {};

//add the stories
app.post('/api/timeStories', (req, res) => {
    data = req.body;
    res.send('Story/Stories Added successfully');
})

//to fetch the latest 6 stories
app.get('/api/timeStories', (req, res) => {
    console.log(data);
    var result = JSON.stringify(data);
    //console.log("data", result);
    var arrStories = [];
    for(story in data){
        arrStories.push(data[story]);
        if(arrStories.length == 6){
            break;
        }
    }
    console.log("stories ", arrStories);
    res.send(arrStories);
});

app.listen(4000, console.log("Server listening on port 4000"));