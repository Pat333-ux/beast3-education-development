export interface Certification {
  id: string;
  studentId: string;
  name: string;
  issuedAt: string;
}

export class CertificationManager {
  private certifications: Certification[] = [];

  issueCertification(
    studentId: string,
    name: string
  ): Certification {
    const certification: Certification = {
      id: crypto.randomUUID(),
      studentId,
      name,
      issuedAt: new Date().toISOString(),
    };

    this.certifications.push(certification);

    return certification;
  }

  getCertifications(): Certification[] {
    return this.certifications;
  }
}

export const certificationManager =
  new CertificationManager();
