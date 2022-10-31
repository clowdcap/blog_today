import express from 'express'

import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'

const app = express()

app.use(express.json())

app.use('/api/posts/', postRoutes)
app.use('/api/auth/', authRoutes)
app.use('/api/users/', userRoutes)

const PORT = 5000
app.listen(PORT, ()=> {
    console.log('NODE JS:: Servidor Conectado')
    console.log(`LINK   :: http://localhost:${PORT}`)
})