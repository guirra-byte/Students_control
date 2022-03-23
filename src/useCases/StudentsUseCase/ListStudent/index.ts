import { StudentRepository } from "../../../repositories/implemetation/StudentRepository";
import { ListStudentsController } from "./ListStudentsController";
import { ListStudentsUseCase } from "./ListStudentsUseCase";

const studentsRepository = StudentRepository.getInstance()

const listStudentsUseCase = new ListStudentsUseCase(studentsRepository)

const listStudentsController = new ListStudentsController(listStudentsUseCase)

export { listStudentsController }