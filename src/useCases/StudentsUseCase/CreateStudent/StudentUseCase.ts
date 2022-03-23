import { IStudentRepository } from "../../../repositories/IStudentsRepository";

export class StudentUseCase {

  constructor(private studentRepository: IStudentRepository) { }

  execute(name: string, email: string, password: string) {

    const verifyEmailExists = this.studentRepository.findByEmail(email)

    if (verifyEmailExists) {

      throw new Error("This student already exists")
    }

    const createStudent = this.studentRepository.create({
      name,
      email,
      password
    })

    return createStudent
  }
}