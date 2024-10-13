const express = require('express')
const app = express()
const port = 3000

const postRouter = require("./routes/posts"); //Import routes for "catalog" area of site

app.use("/posts", postRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})