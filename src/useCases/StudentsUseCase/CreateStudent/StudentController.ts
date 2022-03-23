import { Request, Response } from 'express'
import { StudentUseCase } from './StudentUseCase'

export class StudentController {
  constructor(private studentUseCase: StudentUseCase) { }

  handle(request: Request, response: Response) {

    const { name, email, password } = request.body

    try {

      const student = this.studentUseCase.execute(name, email, password)
      return response.status(201).json(student)
    }
    catch (exception) {

      return response.status(404).json(`${exception}`)
    }



  }
}