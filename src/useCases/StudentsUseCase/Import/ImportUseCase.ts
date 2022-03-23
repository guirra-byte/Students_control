import { IStudentRepository } from "../../../repositories/IStudentsRepository";
import { parse } from "csv-parse";
import fs from 'fs'

interface IImportStudent {

  name: string
  email: string
  password: string
  created_at?: Date
  homeWork?: string[]
  id?: string
  class?: string

}

export class ImportUseCase {

  constructor(private studentRepository: IStudentRepository) { }

  loadStudents(file: Express.Multer.File): Promise<IImportStudent[]> {

    return new Promise((resolve, reject) => {

      const stream = fs.createReadStream(file.path)

      const students: IImportStudent[] = []

      const parseFile = parse()
      stream.pipe(parseFile)

      parseFile.on("data", async (line) => {

        const [name, email, password] = line

        students.push({
          name,
          email,
          password
        })

        return students
      })
        .on("end", () => {
          resolve(students)

        })

        .on("error", (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File) {

    const students = await this.loadStudents(file)

    students.map(async (studentIndex) => {


      const { name, email, password } = studentIndex

      const existStudentIndex = this.studentRepository.findByEmail(email)
      if (!existStudentIndex) {

        return this.studentRepository.create({
          name,
          email,
          password
        })
      }

      throw new Error('Error already exists')
    })
  }

}
