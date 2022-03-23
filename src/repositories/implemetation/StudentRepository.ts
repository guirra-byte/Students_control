import { IStudentRepository } from "../IStudentsRepository";
import { Student } from "../../model/Student";

interface IRequest {
  name: string
  email: string
  password: string
}



export class StudentRepository implements IStudentRepository {

  private classRoom: Student[]

  private constructor() {

    this.classRoom = []

  }

  private static INSTANCE: StudentRepository

  public static getInstance(): StudentRepository {

    if (!StudentRepository.INSTANCE) {

      StudentRepository.INSTANCE = new StudentRepository()
    }

    return StudentRepository.INSTANCE
  }

  findByEmail(email: string): Student {

    const verifyEmail = this.classRoom.find(Index => email === Index.email)
    return verifyEmail
  }

  create({ name, email, password }: IRequest) {

    const newStudent = new Student()
    Object.assign(newStudent, {
      name,
      email,
      password
    })

    this.classRoom.push(newStudent)
    return newStudent
  }

  list(): Student[] {

    return this.classRoom
  }

}

export { IRequest }
