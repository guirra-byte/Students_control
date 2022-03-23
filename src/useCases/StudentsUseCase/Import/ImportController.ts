import { Request, Response } from 'express'
import { ImportUseCase } from './ImportUseCase'

export class ImportController {

  constructor(private importUseCase: ImportUseCase) { }
  handle(request: Request, response: Response): Response {

    const { file } = request

    try {

      const student = this.importUseCase.execute(file)
      return response.status(201).send(student)
    }
    catch (excpetion) {

      return response.status(404).send()
    }

  }
}