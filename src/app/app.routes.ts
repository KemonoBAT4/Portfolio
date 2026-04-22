import { Routes }      from '@angular/router';

// pages import
import { Homepage }    from '../pages/homepage/homepage';
import { Aboutpage }   from '../pages/aboutpage/aboutpage';
import { Projectpage } from '../pages/projectpage/projectpage';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        // home page
        path: 'home',
        component: Homepage
    },
    {
        // about me
        path: 'about',
        component: Aboutpage
    },
    {
        // projects
        path: 'projects',
        component: Projectpage
    },
    {
        // projects view info
        path: 'projects/view/:name',
        component: Projectpage
    },
];
