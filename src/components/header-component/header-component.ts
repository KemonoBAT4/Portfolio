import { Component, signal, computed, WritableSignal, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

// components
import { HeaderLinkItemComponent } from '../header-link-item-component/header-link-item-component';

@Component({
    selector: 'app-header-component',
    standalone: true,
    imports: [
        HeaderLinkItemComponent
    ],
    templateUrl: './header-component.html',
    styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit {

    // #region    ---------- VARIABLES ---------- # //

    // title
    // NOTE: this could be a response from a service
    title  : WritableSignal<string> = signal("Marco Battisti");
    router : Router                 = inject(Router);

    // list of header items
    // NOTE: this is a static list, and could be also a response from a service
    // that fetches the data from an api / database, need to think which
    // is the best for making the edit of this webiste more easy
    header_items_list: Array<{ label: string, href: string }>  = [
        { label: "Home"    , href: "/home"     },
        { label: "About"   , href: "/about"    },
        { label: "Projects", href: "/projects" }
    ]

    // #endregion ---------- VARIABLES ---------- # //


    // #region    ---------- COMPONENT'S CONSTRUCTOR & INIT ---------- # //

    constructor() { }
    ngOnInit() { }

    // #endregion ---------- COMPONENT'S CONSTRUCTOR & INIT ---------- # //


    // #region    ---------- UTILITIES ---------- # //

    // NOTE: i could also use the routerLink but if i do this
    // i have full control on the logic (i wanted to not route it if  i'm already on home page)
    goHome() {
        if (this.router.url != '/home') {
            this.router.navigate(['home']);
        }
    }

    // #endregion ---------- UTILITIES ---------- # //
}
