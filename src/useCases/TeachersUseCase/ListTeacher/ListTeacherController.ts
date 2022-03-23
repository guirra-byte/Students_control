import { Request, Response } from 'express'
import { ListTeachersUseCase } from './ListTeachersUseCase'

export class ListTeachersController {
  constructor(private listTeachersUseCase: ListTeachersUseCase) { }

  handle(request: Request, response: Response): Response {

    try {
      const allTeachers = this.listTeachersUseCase.execute()
      return response.status(201).json(allTeachers)
    } catch (exception) {

      return response.status(404).json(exception)
    }

  }
}