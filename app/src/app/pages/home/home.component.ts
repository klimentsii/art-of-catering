import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animations } from 'src/app/animations';
import { VideoDialogComponent } from 'src/app/components/video-dialog/video-dialog.component';
import { ContentService, HomeData } from 'src/app/services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animations = animations;
  bgImage: string;

  constructor(public dialog: MatDialog, private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getHomeData().subscribe(data => { this.bgImage = data['parallax-image'] });
    this.dialog.open(VideoDialogComponent);
  }
}
