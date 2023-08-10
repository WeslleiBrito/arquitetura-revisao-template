import express from "express";
import cors from "cors"
import { newsRouter } from "./router/newsRouter";
import { authorRouter } from "./router/authorRouter";

const app = express()

app.use(cors())
app.use(express.json())

app.use('/news', newsRouter)
app.use('/authors', authorRouter)

app.listen(3003, () => {
    console.log("Servidor está rodando na porta 3003")
})
