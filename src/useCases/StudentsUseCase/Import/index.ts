import { StudentRepository } from "../../../repositories/implemetation/StudentRepository";
import { ImportController } from "./ImportController";
import { ImportUseCase } from "./ImportUseCase";


const studentRepository = StudentRepository.getInstance()

const importUseCase = new ImportUseCase(studentRepository)

const importController = new ImportController(importUseCase)

export { importController }