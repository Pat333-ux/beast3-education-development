export interface Course {
  id: string;
  title: string;
  description: string;
  credits: number;
}

export class CourseCatalog {
  private courses: Course[] = [];

  createCourse(
    title: string,
    description: string,
    credits: number
  ): Course {
    const course: Course = {
      id: crypto.randomUUID(),
      title,
      description,
      credits,
    };

    this.courses.push(course);

    return course;
  }

  getCourses(): Course[] {
    return this.courses;
  }
}

export const courseCatalog =
  new CourseCatalog();
