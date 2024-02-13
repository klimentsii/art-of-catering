import { Component } from '@angular/core';
import { routes } from 'src/app/routes';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent {
  routes = routes;
}
