import { ListTeachersController } from "./ListTeacherController";
import { ListTeachersUseCase } from "./ListTeachersUseCase";
import { TeacherRepository } from "../../../repositories/implemetation/TeacherRepository";

const teacherRepository = TeacherRepository.getInstance()

const teacherListUseCase = new ListTeachersUseCase(teacherRepository)

const teacherListController = new ListTeachersController(teacherListUseCase)

export { teacherListController }