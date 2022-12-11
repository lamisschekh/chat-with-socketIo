const app= require("express")();
const serveur= require("http").createServer(app);
const io= require("socket.io")(serveur);


app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`)
})

io.on("connection",(socket)=>{
    console.log("un utilisateur est connecté");

    socket.on("Disconnected",()=>{
        console.log("l´utilisateur s est déconnecté")
    })

    socket.on("chat message",(msg) => {
       io.emit("chat message",msg);
    });

}); 


serveur.listen(3000,()=> {
    console.log("Ecoute sur le port")
})
