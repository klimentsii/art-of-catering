import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { routes } from 'src/app/routes';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  routes = routes;
  animations = animations;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(MenuDialogComponent);
  }
}
