export interface Student {
  id: string;
  name: string;
  email: string;
  enrolledAt: string;
}

export class StudentRegistry {
  private students: Student[] = [];

  registerStudent(
    name: string,
    email: string
  ): Student {
    const student: Student = {
      id: crypto.randomUUID(),
      name,
      email,
      enrolledAt: new Date().toISOString(),
    };

    this.students.push(student);

    return student;
  }

  getStudents(): Student[] {
    return this.students;
  }
}

export const studentRegistry =
  new StudentRegistry();
