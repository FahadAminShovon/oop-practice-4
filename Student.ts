import { Homework } from './Homework';
import { User } from './User';

export class Student extends User {
  #grade: number;

  constructor(id: string, firstName: string, lastName: string, grade: number) {
    super(id, firstName, lastName);
    this.#grade = grade;
  }

  get grade(): number {
    return this.#grade;
  }

  submitHomework(homework: Homework) {
    const completedTasks = homework.tasks.map((task) => `${task} is completed`);
    homework.submitTasks(completedTasks);
  }
}
