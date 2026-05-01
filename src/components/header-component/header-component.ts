import { Component, signal, computed, WritableSignal, OnInit, inject, viewChildren, ElementRef, afterNextRender, Signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// components
import { ButtonModule } from 'primeng/button';
import { HeaderLinkItemComponent } from '../header-link-item-component/header-link-item-component';
import { filter } from 'rxjs';

@Component({
    selector: 'app-header-component',
    standalone: true,
    imports: [
        HeaderLinkItemComponent,
        ButtonModule
    ],
    templateUrl: './header-component.html',
    styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit {

    // #region    ---------- VARIABLES ---------- # //

    // NOTE: this could be a response from a service
    title  : WritableSignal<string> = signal("Marco Battisti");
    router : Router                 = inject(Router);

    // nav items and indicator
    indicatorWidth : WritableSignal<number>             = signal(0);
    indicatorLeft  : WritableSignal<number>             = signal(0);
    navItemEls     : Signal<readonly ElementRef<any>[]> = viewChildren(HeaderLinkItemComponent, { read: ElementRef });

    // menu
    menuOpen: WritableSignal<boolean> = signal(false);

    // list of header items
    // NOTE: this is a static list, and could be also a response from a service
    // that fetches the data from an api / database, need to think which
    // is the best for making the edit of this webiste more easy
    header_items_list: Array<{ label: string, href: string }>  = [
        { label: "Home"    , href: "/home"     },
        { label: "Roadmap" , href: "/roadmap"  },
        { label: "Projects", href: "/projects" },
        { label: "About"   , href: "/about"    }
    ]

    // #endregion ---------- VARIABLES ---------- # //


    // #region    ---------- COMPONENT'S CONSTRUCTOR & INIT ---------- # //

    constructor() {
        // this updates at every navigation change
        this.router.events.pipe(
            filter(
                event => event instanceof NavigationEnd
            )
        ).subscribe(
            () => this.updateIndicator()
        );

        // inits the indicator by updating the first position
        afterNextRender(() => this.updateIndicator());
    }
    ngOnInit() { }

    // #endregion ---------- COMPONENT'S CONSTRUCTOR & INIT ---------- # //


    // #region    ---------- UTILITIES ---------- # //

    // NOTE: updates the indicator position
    // for the selected nav item
    private updateIndicator() {
        // gets all the elements
        const els = this.navItemEls();

        // find the active nav item
        const activeIdx = this.header_items_list.findIndex(idx => this.router.url.startsWith(idx.href));

        // gets the element
        const el = els[activeIdx]?.nativeElement;
        if (!el) return;

        // updates the indicator
        this.indicatorLeft.set(el.offsetLeft);
        this.indicatorWidth.set(el.offsetWidth);
    }

    // NOTE: i could also use the routerLink but if i do this
    // i have full control on the logic (i wanted to not route it if  i'm already on home page)
    goHome() {
        if (this.router.url != '/home') {
            this.router.navigate(['home']);
        }
    }

    goContactMe() {
        // TODO: implement1
        // -> /about#contact-me
        // this.router.navigate(['about'], { fragment: 'contact-me' });
    }

    // NOTE: opens a new tab with the linkedin page
    goLinkedin() {
        window.open("https://linkedin.com/in/marco-battisti-kb4/", "_blank");
    }

    // NOTE: opens a new tab with the github page
    goGithub() {
        window.open("https://github.com/KemonoBAT4", "_blank");
    }

    // #endregion ---------- UTILITIES ---------- # //
}
