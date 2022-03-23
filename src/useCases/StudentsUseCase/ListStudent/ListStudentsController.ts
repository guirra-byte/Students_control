import { json, Request, Response } from 'express'
import { ListStudentsUseCase } from './ListStudentsUseCase'

export class ListStudentsController {

  constructor(private listStudentsUseCase: ListStudentsUseCase) { }

  handle(request: Request, response: Response): Response {


    try {

      const all = this.listStudentsUseCase.execute()
      return response.status(201).json(all)
    } catch (exception) {

      return response.status(401).json(exception)
    }

  }
}