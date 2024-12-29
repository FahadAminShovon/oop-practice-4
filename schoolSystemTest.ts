import { Teacher } from './Teacher';
import { Student } from './Student';
import { Homework } from './Homework';

const teacher = new Teacher('1', 'John', 'Doe', 'Math');
const student = new Student('2', 'Jane', 'Doe', 5);

const homework = teacher.createHomework({
  name: 'Math homework',
  dueDate: new Date('2021-12-12'),
  tasks: ['Task 1', 'Task 2'],
  readingMaterials: ['Material 1', 'Material 2'],
});

teacher.assignHomework(homework, student);

student.submitHomework(homework);

teacher.gradeHomework(homework, 10);
