import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public router: Router){ }

  get isHomeRoute(): boolean {
    return this.router.url !== '/';
  }

  get isBuffetsRoute(): boolean {
    return this.router.url !== '/buffets';
  }
}
