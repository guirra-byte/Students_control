import { StudentRepository } from "../../../repositories/implemetation/StudentRepository";
import { SendEmailController } from "./SendEmailController";
import { SendEmailUseCase } from './SendEmailUseCase'

const studentRepository = StudentRepository.getInstance()

const mailUseCase = new SendEmailUseCase(studentRepository)

const mailController = new SendEmailController(mailUseCase)

export default mailController