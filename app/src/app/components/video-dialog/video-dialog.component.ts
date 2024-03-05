import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss']
})
export class VideoDialogComponent {
  videoLink: string;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getHomeData().subscribe(
      data => this.videoLink = data["video-link"]
    );
  }
}
