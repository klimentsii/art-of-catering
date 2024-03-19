import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from 'src/app/components/menu-dialog/menu-dialog.component';
import { animations } from 'src/app/animations';
import { BuffetData, ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-buffets',
  templateUrl: './buffets.component.html',
  styleUrls: ['./buffets.component.scss']
})
export class BuffetsComponent implements OnInit {
  leftBuffetsList: BuffetData[] = [];
  rightBuffetsList: BuffetData[] = [];
  currentPosition = 0;
  lastAnimation = 0;
  touchStartY = 0; // Добавляем переменную для отслеживания начальной точки касания

  animations = animations;

  constructor(public dialog: MatDialog, private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getBuffetsData().subscribe(data => {
      data.map((buffet, index) => {
        if (index < data.length / 2) {
          this.leftBuffetsList.push(buffet);
        } else {
          this.rightBuffetsList.push(buffet);
        }
      });
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(MenuDialogComponent);
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    event.preventDefault(); // Отменяем действие по умолчанию
    const delta = event.deltaY;
    this.handleScroll(delta);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    event.preventDefault(); // Отменяем действие по умолчанию
    this.touchStartY = event.touches[0].clientY; // Записываем начальную точку касания
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    event.preventDefault(); // Отменяем действие по умолчанию
    const delta = event.touches[0].clientY - this.touchStartY;
    this.handleScroll(delta);
  }

  private handleScroll(delta: number) {
    const timeNow = new Date().getTime();

    if (timeNow - this.lastAnimation < 500) {
      return;
    }

    if (delta < 0) {
      if (this.currentPosition < 0) {
        this.currentPosition += this.scrollHeight;
        this.scroll();
      }
    } else {
      if (this.currentPosition > -this.scrollHeight * (this.leftBuffetsList.length - 1)) {
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
