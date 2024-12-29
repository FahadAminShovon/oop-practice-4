import { Homework } from './Homework';
import { Student } from './Student';
import { User } from './User';

export class Teacher extends User {
  #subject: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    subject: string
  ) {
    super(id, firstName, lastName);
    this.#subject = subject;
  }

  get subject(): string {
    return this.#subject;
  }

  createHomework({
    name,
    dueDate,
    tasks,
    readingMaterials,
  }: {
    name: string;
    dueDate: Date;
    tasks: string[];
    readingMaterials: string[];
  }) {
    const homework = new Homework({
      name,
      dueDate,
      tasks,
      readingMaterials,
      createdBy: this,
    });
    return homework;
  }

  gradeHomework(homework: Homework, grade: number) {
    homework.grade = grade;
  }

  updateReadingMaterials(homework: Homework, readingMaterials: string[]) {
    homework.readingMaterials = readingMaterials;
  }

  assignHomework(homework: Homework, student: Student) {
    homework.assingHomeWorkTo = student;
  }
}
