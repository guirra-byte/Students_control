import { TeacherRepository } from "../../../repositories/implemetation/TeacherRepository";
import { CreateTeacherController } from "./CreateTeacherController";
import { CreateTeacherUseCase } from "./CreateTeacherUsecase";

const teacherRepository = TeacherRepository.getInstance()

const teacherUseCase = new CreateTeacherUseCase(teacherRepository)

const teacherController = new CreateTeacherController(teacherUseCase)

export { teacherController }