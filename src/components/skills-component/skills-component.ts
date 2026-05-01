import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SkillNode {
    id           : number ;
    label        : string ;
    done         : boolean;
    description  : string ;
}

@Component({
    selector: 'app-skills-component',
    standalone: true,
    imports: [],
    templateUrl: './skills-component.html',
    styleUrl: './skills-component.css',
})
export class SkillsComponent {

    hardSkills = signal<SkillNode[]>([
        { id: 1, label: 'Sviluppo Web Frontend'   , done: true  , description: 'Buona conoscenza di Html, Css, Javascript, Typescript e PHP'                       },
        { id: 2, label: 'Sviluppo Web Backend '   , done: true  , description: 'Buona conoscenza di Python, Java, Javascript per la gestione del backend'          },
        { id: 3, label: 'Database SQL'            , done: true  , description: 'Buona conoscenza di MySQL, PostreSQL, MariaDB, SQLite, MongoDB'                    },
        { id: 4, label: 'Tools'                   , done: true  , description: 'Buona conoscenza di tool di sviluppo come Git, Docker, Postman, Kubernetes, Nginx' },
        { id: 5, label: 'Framework'               , done: true  , description: 'Utilizzo di framework come Angular, React, NextJS, Flask, FastAPI, Express'        },
        { id: 6, label: 'Librerie'                , done: true  , description: 'Utilizzo di librerie come Bootstrap, Tailwind, MaterialUI, PrimeNG, PrimeReact, SQLAlchemy' },
        { id: 6, label: 'Intelligenza Artificiale', done: false , description: 'Algoritmi di Machine Learning e Deep Learning, NLP e Computer Vision, TensorFlow, PyTorch' },
    ]);

    softSkills = signal<SkillNode[]>([
        { id: 1, label: 'Comunicazione'    , done: true, description: 'Chiarezza e ascolto'                                    },
        { id: 2, label: 'Teamwork'         , done: true, description: 'Collaborazione tra grupppi e membri del team di lavoro' },
        { id: 3, label: 'Stress management', done: true, description: 'Capacità di gestione dello stress'                      },
        { id: 4, label: 'Problem Solving'  , done: true, description: 'Capacità di risoluzione di problemi e decision making'  },
        { id: 4, label: 'Mentoring'        , done: true, description: 'Trasferire conoscenza'                                  },
        { id: 5, label: 'Strategy'         , done: true, description: 'Visione a lungo termine'                                },
    ]);
}

