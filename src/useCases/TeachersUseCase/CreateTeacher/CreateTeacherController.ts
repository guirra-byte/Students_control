import { Request, Response } from 'express'
import { CreateTeacherUseCase } from './CreateTeacherUsecase'

export class CreateTeacherController {

  constructor(private teacherUseCase: CreateTeacherUseCase) { }

  handle(request: Request, response: Response): Response {

    const { name, email, password } = request.body
    try {

      const createTeacher = this.teacherUseCase.execute({ name, email, password })
      return response.status(201).json(createTeacher)
    } catch (exception) {

      return response.status(401).json(exception)
    }

  }
}