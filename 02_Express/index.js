import express from 'express'

const app = express()

const port = 3000
app.get('/', (req,res)=>{
  res.send("Hello, Welcome to Express...")
})
app.get('/hello',(req,res)=>{
  res.send("heyy from  /hello")
})

app.listen(port,()=>{
  console.log(` Server is running at : ${port}....`)
})
// cd "02_Express" use this to naviagte in this
