import { Router } from 'express'
import { teacherController } from '../useCases/TeachersUseCase/CreateTeacher'
import { teacherListController } from '../useCases/TeachersUseCase/ListTeacher'
const teacherRoutes = Router()

teacherRoutes.post('/', (request, response) => {

  teacherController.handle(request, response)
})

teacherRoutes.get("/allTeachers", (request, response) => {

  teacherListController.handle(request, response)

})

export { teacherRoutes }