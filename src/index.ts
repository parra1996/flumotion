import express from 'express';
const app =  express();

app.use(express.json());
const PORT = 3000;

app.get('/hola', (_req,res)=>{
    console.log("holiiiii");
    res.send("sirve");
} )

app.listen(PORT, ()=> {
    console.log("servidor en el port " + PORT)
})