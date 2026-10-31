import { studentRegistry } from "./StudentRegistry";
import { courseCatalog } from "./CourseCatalog";
import { learningPathways } from "./LearningPathways";

export class EducationReport {
  generate() {
    return {
      students: studentRegistry.getStudents().length,
      courses: courseCatalog.getCourses().length,
      pathways: learningPathways.getPathways().length,
      generatedAt: new Date().toISOString(),
    };
  }
}

export const educationReport =
  new EducationReport();
