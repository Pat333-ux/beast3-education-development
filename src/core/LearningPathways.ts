export interface LearningPathway {
  id: string;
  title: string;
  description: string;
}

export class LearningPathways {
  private pathways: LearningPathway[] = [];

  createPathway(
    title: string,
    description: string
  ): LearningPathway {
    const pathway: LearningPathway = {
      id: crypto.randomUUID(),
      title,
      description,
    };

    this.pathways.push(pathway);

    return pathway;
  }

  getPathways(): LearningPathway[] {
    return this.pathways;
  }
}

export const learningPathways =
  new LearningPathways();
