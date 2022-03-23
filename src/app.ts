import express from 'express'
import studentRoutes from './routes/Students.routes'
import { teacherRoutes } from './routes/Teachers.routes'
const app = express()

app.use(express.json())

app.use("/students", studentRoutes)
app.use("/teachers", teacherRoutes)


export default app