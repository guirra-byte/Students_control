import { Email } from "../model/Email/Email"
import { Student } from "../model/Student"

interface IStudentDTO {
  name: string
  email: string
  password: string
}

export interface ISendEmail {
  description: string
  material: string
  studentEmail: string
  email: string
}

export interface IStudentRepository {
  findByEmail(email: string): Student | undefined
  create(student: IStudentDTO): Student | undefined
  list(): Student[]
}