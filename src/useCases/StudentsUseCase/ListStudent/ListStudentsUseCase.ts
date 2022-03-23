import { IStudentRepository } from "../../repositories/IStudentsRepository";

export class ListStudentsUseCase {

  constructor(private studentsRepository: IStudentRepository) { }

  execute() {


    const listAll = this.studentsRepository.list()
    return listAll

  }
}