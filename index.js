const express= require('express')
const app= express()


const fs= require("fs")
PORT=3000

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.post("/", (req,res)=>{
    fs.writeFile("public/data.txt",JSON.stringify(req.body), function(err){
        if(err) {
            return console.log(err)
        }
        console.log("The file was saved!")
    })
})

app.get("/download", async (req,res)=>{
    console.log('hola')
    let hola= await lector()
    res.send(hola)
})

let lector = function (){

    return new Promise((resolve, reject)=>{
        fs.readFile("public/data.txt",(err,data)=>{
            if(err) {
                return reject
            }
            resolve(data)
        })
    })
}


app.listen(PORT, function(){console.log("Servidor lanzado en el puerto 3000")})
