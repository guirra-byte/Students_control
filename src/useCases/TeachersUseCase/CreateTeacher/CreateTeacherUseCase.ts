import { ITeacherRepository } from "../../../repositories/ITeacherRepository";

interface ITeacherDTO {
  name: string
  email: string
  password: string
}
export class CreateTeacherUseCase {

  constructor(private teacherRepository: ITeacherRepository) { }

  execute({ name, email, password }: ITeacherDTO) {

    const verifyTeacherAlreadyExists = this.teacherRepository.findByEmail(email)
    if (verifyTeacherAlreadyExists) {

      throw new Error("This user already created")
    }

    const create = this.teacherRepository.create({ name, email, password })
    return create
  }
}