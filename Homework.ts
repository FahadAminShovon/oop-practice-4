import { Student } from './Student';
import { Teacher } from './Teacher';

export class Homework {
  #name: string;
  #dueDate: Date;
  #tasks: string[];
  #readingMaterials: string[];
  #createdBy: Teacher;
  #assignedTo: Student;
  #grade: number;
  #isSubmitted: boolean;

  constructor({
    name,
    dueDate,
    tasks = [],
    readingMaterials = [],
    createdBy,
  }: {
    name: string;
    dueDate: Date;
    tasks: string[];
    readingMaterials: string[];
    createdBy: Teacher;
  }) {
    this.#name = name;
    this.#dueDate = dueDate;
    this.#tasks = tasks;
    this.#readingMaterials = readingMaterials;
    this.#createdBy = createdBy;
    this.#grade = -1;
    this.#isSubmitted = false;
  }

  set assingHomeWorkTo(student: Student) {
    this.#assignedTo = student;
  }

  set grade(grade: number) {
    this.#grade = grade;
  }

  get grade(): number {
    return this.#grade;
  }

  get tasks() {
    return this.#tasks;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get readingMaterials() {
    return this.#readingMaterials;
  }

  set readingMaterials(readingMaterials: string[]) {
    this.#readingMaterials = readingMaterials;
  }

  submitTasks(tasks: string[]) {
    this.#tasks = tasks;
    this.#isSubmitted = true;
  }
}
