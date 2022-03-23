import { ITeacherRepository } from "../../../repositories/ITeacherRepository";


export class ListTeachersUseCase {
  constructor(private teacherRepository: ITeacherRepository) { }

  execute() {

    const allTeacher = this.teacherRepository.list()
    return allTeacher
  }
}