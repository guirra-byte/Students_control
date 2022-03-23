import { IStudentRepository } from "../repositories/IStudentsRepository";

interface IStudentDTO {
  name: string
  email: string
  password: string
}

export class CreateStudent {


  constructor(private studentRepository: IStudentRepository) { }

  execute({ name, email, password }: IStudentDTO) {

    const verifyEmailAlreadyExists = this.studentRepository.findByEmail(email)

    if (verifyEmailAlreadyExists) {

      throw new Error("This Student already exists")

    }

    return this.studentRepository.create({ name, email, password })

  }
}