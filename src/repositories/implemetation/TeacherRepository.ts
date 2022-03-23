import { ITeacherRepository } from "../ITeacherRepository";
import { Teacher } from "../../model/Teacher";

interface ITeacherRequest {
  name: string
  email: string
  password: string
}
export class TeacherRepository implements ITeacherRepository {

  private teachers: Teacher[]

  private static INSTANCE: TeacherRepository

  private constructor() {
    this.teachers = []
  }

  public static getInstance(): TeacherRepository {

    if (!TeacherRepository.INSTANCE) {

      TeacherRepository.INSTANCE = new TeacherRepository()
    }

    return TeacherRepository.INSTANCE

  }

  findByEmail(email: string): Teacher {

    const verifyEmail = this.teachers.find(emailIndex => email === emailIndex.email)
    return verifyEmail
  }
  create({ name, email, password }: ITeacherRequest) {

    const newTeacher = new Teacher()
    Object.assign(newTeacher, {
      name,
      email,
      password
    })

    this.teachers.push(newTeacher)
    return newTeacher
  }
  list(): ITeacherRequest[] {

    return this.teachers
  }

}