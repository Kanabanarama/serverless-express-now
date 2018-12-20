const express = require('express')

const app = express();
const port = process.env.PORT || 5002;

app.get('/', (req, res) => {
    res.send('It works.')
    res.end()
})

app.listen(port, err => {
    if (err) throw err
    console.log(`> Listening on port ${port}`)
})
