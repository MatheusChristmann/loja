import express from "express"
import clienteRoutes from "./routes/clientes.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", clienteRoutes)

app.listen(8800)