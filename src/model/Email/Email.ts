

export class Email {
  description: string
  material: string
  studentEmail: string
  email: string
  created_at?: Date

  constructor() {

    this.created_at = new Date()
  }
}