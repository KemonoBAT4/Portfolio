import { Component, input, WritableSignal, signal } from '@angular/core';
import { Project, ProjectTag } from '../../interfaces/projects';

@Component({
    selector: 'app-projects-component',
    imports: [],
    templateUrl: './projects-component.html',
    styleUrl: './projects-component.css',
})
export class ProjectsComponent {
    project = input.required<Project>();
    index = input.required<number>();

    imageError: WritableSignal<boolean> = signal(false);

    onImageError() {
        this.imageError.set(true);
    }
}
