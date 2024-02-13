import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from 'src/app/components/menu-dialog/menu-dialog.component';
import { leftBuffetsList, rightBuffetsList } from 'src/app/list';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-buffets',
  templateUrl: './buffets.component.html',
  styleUrls: ['./buffets.component.scss']
})
export class BuffetsComponent {
  leftBuffetsList = leftBuffetsList;
  rightBuffetsList = rightBuffetsList;
  currentPosition = 0;
  lastAnimation = 0;

  animations = animations;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(MenuDialogComponent);
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    let delta = 0;

    if (event.deltaY) {
      delta = event.deltaY;
    }
    const timeNow = new Date().getTime();

    if (
      timeNow - this.lastAnimation < 500
    ) {
      event.preventDefault();
      return;
    }

    if (delta < 0) {
      if (this.currentPosition < 0) {
        this.currentPosition += this.scrollHeight;
        this.scroll();
      }
    } else {
      if (this.currentPosition > - this.scrollHeight * (leftBuffetsList.length - 1)) {
        this.currentPosition -= this.scrollHeight;
        this.scroll();
      }
    }

    this.lastAnimation = timeNow;
  }

  scroll() {
    (document.querySelectorAll('.buffets-item')[0] as HTMLElement).style.top = this.currentPosition + 'px';
    (document.querySelectorAll('.buffets-item')[1] as HTMLElement).style.bottom = this.currentPosition + 'px';
  }

  public get scrollHeight(): number {
    return document.body.scrollHeight;
  }
}
