import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ContentService, Service } from 'src/app/services/content.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent {
  state: Service;

  constructor(public activatedRoute: ActivatedRoute, private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getService1Data().subscribe(data => {
      this.activatedRoute.paramMap
        .pipe(map(() => window.history.state))
        // .subscribe(s => {console.log(s); console.log(data[0])})
        .subscribe(state => this.state = state.title ? state : data[0]);
    });
  }
}
