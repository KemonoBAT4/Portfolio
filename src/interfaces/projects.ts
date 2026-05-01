export interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
  imageUrl?: string;
  projectUrl?: string;
  repoUrl?: string;
}

export interface ProjectTag {
    label: string;
    color?: string;
}