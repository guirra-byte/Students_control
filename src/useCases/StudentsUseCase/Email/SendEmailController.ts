
import { Request, Response } from 'express'
import { SendEmailUseCase } from "./SendEmailUseCase";


export class SendEmailController {

  constructor(private studentsMailUseCase: SendEmailUseCase) { }

  handle(request: Request, response: Response): Response {

    const { description, material, studentEmail, email } = request.body

    try {

      const sendMail = this.studentsMailUseCase.execute({ description, material, studentEmail, email })

      return response.status(201).send(sendMail)
    }
    catch (exception) {

      return response.status(400).json(`${exception}`)
    }

  }
}