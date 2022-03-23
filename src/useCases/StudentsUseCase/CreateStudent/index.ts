import { StudentController } from "./StudentController";
import { StudentUseCase } from "./StudentUseCase";
import { StudentRepository } from "../../../repositories/implemetation/StudentRepository";

const studentRepository = StudentRepository.getInstance()

const studentUseCase = new StudentUseCase(studentRepository)

const studentController = new StudentController(studentUseCase)


export default studentController