import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (sessionStorage.getItem('login')) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

    canActivateAdmin(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {

            const type = sessionStorage.getItem('type')
        if (type === "admin") {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
