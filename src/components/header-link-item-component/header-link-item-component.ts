import { Component, InputSignal, OnInit, WritableSignal, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-header-link-item-component',
    imports: [RouterModule],
    templateUrl: './header-link-item-component.html',
    styleUrl: './header-link-item-component.css',
})
export class HeaderLinkItemComponent implements OnInit {

    // #region    ---------- VARIABLES ---------- # //

    item   : InputSignal<{ label: string, href: string }> = input.required<{ label: string, href: string }>();
    router : Router                                       = inject(Router);

    // #endregion ---------- VARIABLES ---------- # //


    // #region    ---------- COMPONENT'S CONSTRUCTOR & INIT ---------- # //

    constructor() { }
    ngOnInit() { }

    // #endregion ---------- COMPONENT'S CONSTRUCTOR & INIT ---------- # //

    // #region    ---------- UTILITIES ---------- # //

    isActive() {
        return this.router.url === this.item().href;
    }

    // #endregion ---------- UTILITIES ---------- # //

}


