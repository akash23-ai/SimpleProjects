const express = require("express")
const fs = require('fs')
const app = express();

let USER = [];
app.get('/', (req, res) => {
    res.send('Hey there')
})



try {
    USER = JSON.parse(fs.readFileSync('user.json','utf8'))
} catch  {
    USER = []
}


console.log(USER)
app.get('/api', async (req,res) => {
    const data = req.headers.user;
    USER.push(data);

    console.log(USER)

    fs.writeFileSync('user.json', JSON.stringify(USER))

    res.send('Done')
   
})



app.listen(3000, ()=> {
    console.log('Listenin at port ', 3000);
})