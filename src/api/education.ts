import { educationReport } from "../core/EducationReport";

export async function GET() {
  return Response.json({
    success: true,
    division: "Education & Human Development",
    report: educationReport.generate(),
  });
}
