import { v4 as uuidV4 } from 'uuid'

export class Teacher {
  name: string
  email: string
  password: string
  id?: string
  access?: string
  created_at?: Date

  constructor() {

    if (!this.id) {

      this.id = uuidV4()
      this.created_at = new Date()
      this.access = "Teacher"
    }
  }
}