import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { animations } from 'src/app/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() title!: string;
  @Input() subtitle!: string;

  animations = animations;

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    eventDate: new FormControl('', Validators.required),
    eventTime: new FormControl('', Validators.required),
    numberOfAudience: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    information: new FormControl('', Validators.required),
  })

  constructor() {}
}
