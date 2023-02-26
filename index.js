import express from "express";
import cors from 'cors';

const server = express();
server.use(express.json())
server.use(cors())

server.post("/api/login", (req, res) =>{
    console.log(req.body);
    res.status(200).send({
        ACCESS_TOKEN : "3011",
        user: {
            username: "Chouch"
        }
    });

})
server.listen(3001, () =>{
    console.log("listening on port 3001")
})