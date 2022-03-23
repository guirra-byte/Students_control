import { v4 as uuidV4 } from 'uuid'

export class Student {
  name: string;
  email: string;
  password: string;
  homeWork: string[];
  id?: string;
  created_at: Date;
  class: string
  access?: string


  constructor() {
    if (!this.id) {
      this.id = uuidV4()
      this.created_at = new Date();
      this.access = "Student"

    }
  }
}