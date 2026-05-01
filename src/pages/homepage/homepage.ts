import { Component, signal, WritableSignal } from '@angular/core';

import { SkillsComponent } from '../../components/skills-component/skills-component';
import { ProjectsComponent } from '../../components/projects-component/projects-component';
import { Project } from '../../interfaces/projects';

@Component({
    selector: 'app-homepage',
    imports: [SkillsComponent, ProjectsComponent],
    templateUrl: './homepage.html',
    styleUrl: './homepage.css',
})

export class Homepage {

    // TODO: move this into a proper service
    projects: WritableSignal<Project[]> = signal<Project[]>([
        {
            title: 'Cardial System',
            description: "Cardinal è un'applicazione sviluppata in Python creata per migliorare e facilitare la creazione e gestione di nuove appliacazioni.",
            tags: [
                { label: 'Python'    , color: '#3178c6' },
                { label: 'Flask'     , color: '#f6f6f7' },
                { label: 'SQLAlchemy', color: '#e21f1f' },
                { label: 'HTML'      , color: '#000000' },
                { label: 'CSS'       , color: '#c300ff' },
                { label: 'Javascript', color: '#f8df00' },
            ],
            imageUrl: '/assets/projects-template.jpg',
            projectUrl: 'https://github.com/KemonoBAT4/Cardinal',
            repoUrl: 'https://github.com/KemonoBAT4/Cardinal'
        },
        {
            title: 'Midnight',
            description: "Midnight è un'applicazione sviluppata sia per Desktop che per Mobile creata per gestire attività quotidiane, come la creazione di task, eventi, gestione del calendari e notifiche.",
            tags: [
                { label: 'C++'       , color: '#3178c6' },
                { label: 'Electron'  , color: '#08cfb5' },
                { label: 'HTML'      , color: '#000000' },
                { label: 'CSS'       , color: '#c300ff' },
                { label: 'Javascript', color: '#f8df00' },
            ],
            imageUrl: '/assets/projects-template.jpg',
            projectUrl: 'https://github.com/KemonoBAT4/Midnight',
            repoUrl: 'https://github.com/KemonoBAT4/Midnight.'
        },
        {
            title: 'Programming Library',
            description: "Programming Library è un'applicazione sviluppata per avere una documentazione completa di funzioni, spiegazioni, snippet di codice in diversi linguaggi di programmazione.",
            tags: [
                { label: 'Ejs'       , color: '#d40685' },
                { label: 'CSS'       , color: '#c300ff' },
                { label: 'Javascript', color: '#f8df00' },
            ],
            imageUrl: '/assets/projects-template.jpg',
            projectUrl: 'https://github.com/KemonoBAT4/Programming-Library',
            repoUrl: 'https://github.com/KemonoBAT4/Programming-Library'
        },
        {
            title: 'Movie Catalog',
            description: "Movie Catalog è un'applicazione self hosted che permette la visualizzazione e la catalogalizzazione di film e serie tv presenti in un database e folder locale, pensata per una visualizzazione comoda da TV, Pc, Smartphone e Tablet senza aver bisogno di scaricare ogni film che si vuole vedere",
            tags: [
                { label: 'Angular' },
                { label: 'TypeScript', color: '#3178c6' },
                { label: 'CSS'       , color: '#c300ff' },
                { label: 'Python'    , color: '#3178c6' },
                { label: 'Flask'     , color: '#f6f6f7' },
                { label: 'SQLAlchemy', color: '#e21f1f' },
            ],
            imageUrl: '/assets/projects-template.jpg',
            projectUrl: 'https://github.com/KemonoBAT4/Movie-Catalog',
            repoUrl: 'https://github.com/KemonoBAT4/Movie-Catalog'
        },
    ]);
}
