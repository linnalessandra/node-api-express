const express = require('express');
const server = express();
const port = 3000;

server.get('/api', (req, res) => {
    res.send("Välkommen!")
})

server.use(express.static('public'))

server.listen(port, () => console.log("Applikationen är igång, välkommen!"))
