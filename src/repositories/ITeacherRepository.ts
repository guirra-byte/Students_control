import { Teacher } from "../model/Teacher";

interface ICreateTeacher {
  name: string
  email: string
  password: string
}

interface ITeacherRepository {
  findByEmail(email: string): Teacher
  create(teacher: ICreateTeacher): void
  list(): Teacher[]

}

export { ITeacherRepository }
