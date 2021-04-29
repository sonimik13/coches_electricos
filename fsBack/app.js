// -------------------------------------------------------------------------------
// Node modules
// -------------------------------------------------------------------------------
require('dotenv').config();
const express = require('express');
const {signUp, signIn, signOut, saveFavorite, searchJobs, searchJobs2, validateEmail, validatePass, deleteFavorite, readFav, newPass, changePass, signUpGoogle} = require('./src/controllers/controller')
const app = express();
const cors = require('cors');

// -------------------------------------------------------------------------------
// Frontend app
// -------------------------------------------------------------------------------

// const staticFilesPath = express.static(__dirname + "/public")
// app.use(staticFilesPath)
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// -------------------------------------------------------------------------------
// API
// -------------------------------------------------------------------------------

app.post("/signup", async (req, res) => {
    if(validateEmail(req.body.email)&&validatePass(req.body.pass)){
        const result =  await signUp(req.body.email, req.body.pass)
        res.send(result)
    } else {
        res.status(406).json({
            status: 406,
            data: "Usuario/contraseña no valida",
            ok: false
        })
    } 
})

app.post("/signin", async (req, res) => {
    const result = await signIn(req.body.email, req.body.pass)
    res.send(result)
})

app.put("/signout", async (req, res) => {
    const result = await signOut(req.headers.authorization);
    res.send(result);
})

app.post("/coche/create", async (req, res) => {
    const result = await saveFavorite(req.body.titulo, req.body.resumen, req.body.url, req.headers.authorization)
    res.send(result)
})

app.delete("/coche/delete", async (req, res) => {
    const result = await deleteFavorite(req.body.url, req.headers.authorization);
    res.send(result)
})

app.get("/coche/get", async (req, res) => {
    const result = await readFav(req.headers.authorization);
    res.send(result)
})

app.post("/user/newpass", async (req,res) =>{
    const result = await newPass(req.body.email)
    res.send(result)
})

app.put("/user/changepass", async (req,res) =>{
    const result = await changePass(req.body.pass, req.headers.authorization)
    res.send(result)
})

app.post('/signin/google', async (req, res) => {
    const result = await signIn(req.body.email, "")
    res.send(result)
})

app.post("/signup/google", async (req, res) => {
    const result =  await signUpGoogle(req.body.email, "")
    res.send(result)
})

// -------------------------------------------------------------------------------
// Start server
// -------------------------------------------------------------------------------

app.listen(process.env.PORT, () => console.log(`Server listening on ${process.env.PORT}`))