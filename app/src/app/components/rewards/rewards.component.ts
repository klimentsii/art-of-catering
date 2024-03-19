import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent {
  rewards: Array<string>;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getRewardsData().subscribe(data => { this.rewards = data });
  }
}
