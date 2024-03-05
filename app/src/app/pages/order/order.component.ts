import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { BuffetData, ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  state: BuffetData;

  constructor(public activatedRoute: ActivatedRoute, private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getBuffetsData().subscribe(data => {
      this.activatedRoute.paramMap
        .pipe(map(() => window.history.state))
        .subscribe(state => this.state = state.title ? state : data[0]);
    });
  }
}
