import { IStudentRepository } from "../../../repositories/IStudentsRepository";
import { transporter } from '../../../model/Email/EmailModel'
import { Email } from "../../../model/Email/Email";

interface IStudentsDTO {
  description: string
  material: string
  studentEmail: string
  email: string

}


export class SendEmailUseCase {

  constructor(private studentsRepository: IStudentRepository) { }

  execute(data: IStudentsDTO) {

    const verifyStudentByEmail = this.studentsRepository.findByEmail(data.studentEmail)

    if (!verifyStudentByEmail) {

      throw new Error("This Student not exists")
    }

    const runMailSender = async () => {

      const mailSender = await transporter.sendMail({

        text: data.description,
        subject: data.material,
        from: `<${data.email}>`,
        to: [`${data.studentEmail}`]
      })

      console.log("Chegou até aqui")
      return mailSender
    }

    runMailSender()
  }
}