import { Component, inject, signal, WritableSignal } from '@angular/core';

import { SkillsComponent } from '../../components/skills-component/skills-component';
import { ProjectsComponent } from '../../components/projects-component/projects-component';
import { Project } from '../../interfaces/projects';
import { RetrieveProjects } from '../../services/retrieve-projects';

@Component({
    selector: 'app-homepage',
    imports: [SkillsComponent, ProjectsComponent],
    templateUrl: './homepage.html',
    styleUrl: './homepage.css',
})

export class Homepage {

    private project_service: RetrieveProjects = inject(RetrieveProjects);
    projects: WritableSignal<Project[]> = this.project_service.getProjects()

    constructor () { }
}
