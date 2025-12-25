import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TablerIconComponent } from 'angular-tabler-icons';

@Component({
  selector: 'app-navbar',
  imports: [TablerIconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private _router = inject(Router);

  navigateHome(): void {
    this._router.navigate(['/home']);
  }
}
