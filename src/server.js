import express from "express";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors);

server.listen(process.env.PORT || 3001, () => {
    console.log("Servidor executando na porta 3001");
})