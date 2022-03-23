import { response, Router } from 'express'
import mailController from '../useCases/StudentsUseCase/Email'
import multer from 'multer'
import studentController from '../useCases/StudentsUseCase/CreateStudent/index'
import { importController } from '../useCases/StudentsUseCase/Import'
import { listStudentsController } from '../useCases/StudentsUseCase/ListStudent'
import ejs from 'ejs'

const studentRoutes = Router()

const upload = multer({
  dest: './tmp'
})

studentRoutes.post("/", (request, response) => {

  studentController.handle(request, response)
})

studentRoutes.post('/imports', upload.single('file'), (request, response) => {

  importController.handle(request, response)
})

studentRoutes.post('/sendEmail', (request, response) => {

  mailController.handle(request, response)
})

studentRoutes.get('/allStudents', (request, response) => {

  listStudentsController.handle(request, response)
})


export default studentRoutes