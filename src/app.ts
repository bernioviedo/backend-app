import express from 'express'

const app = express()

app.use(express.json())

app.get('/api',(req, res) =>{
    res.json({ messagge: 'holaaa'})
})

app.listen(8080, () =>{
    console.log('server listening on port 8080')
})