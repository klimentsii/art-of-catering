import { Component } from '@angular/core';
import { animations } from 'src/app/animations';
import { corporateList, serviceList } from 'src/app/list';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  corporateList = corporateList;
  serviceList = serviceList;
  animations = animations;
}
