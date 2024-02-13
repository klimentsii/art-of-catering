import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { animations } from 'src/app/animations';
import { VideoDialogComponent } from 'src/app/components/video-dialog/video-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animations = animations;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(VideoDialogComponent);
  }
}
