import { Component, signal, computed, WritableSignal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header-component',
    templateUrl: './header-component.html',
    styleUrl: './header-component.css',
})
export class HeaderComponent implements OnInit {

    title: WritableSignal<string> = signal("Marco Battisti");

    // #region    ---------- COMPONENT'S CONSTRUCTOR & INIT ---------- # //

    constructor(private router: Router) { }
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
