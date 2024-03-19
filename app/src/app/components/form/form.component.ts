import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { animations } from 'src/app/animations';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() title!: string;
  @Input() subtitle!: string;

  form: FormGroup;

  animations = animations;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      eventDate: new FormControl('', [Validators.required, this.dateValidator(), this.futureDateValidator()]),
      eventTime: new FormControl('', Validators.required),
      numberOfGuests: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      information: new FormControl('', Validators.required),
    });
  }

  futureDateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const currentDate = new Date();
      const inputDate = new Date(control.value);

      if (inputDate <= currentDate) {
        return { 'futureDate': true };
      }

      return null;
    };
  }

  dateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

      if (!dateRegex.test(control.value)) {
        return { 'invalidDate': true };
      }

      return null;
    };
  }

  submitForm() {
    const emailjsData = {
      service_id: 'service_j2jj0ua',
      template_id: 'template_gm2wz5h',
      public_key: 'c55Mfe2n_40aik4Dx',
      template_params: this.form.getRawValue(),
    }

    let result = '';
    for (const [key, value] of Object.entries(this.form.value)) {
      result += `${key}: ${value}; `;
    }
    result = result.slice(0, -3);

    if (this.form.valid) {
      try {
        emailjs
          .send(emailjsData.service_id, emailjsData.template_id, emailjsData.template_params, emailjsData.public_key)

        fetch(`https://api.callmebot.com/whatsapp.php?phone=966556407007&text=${result}&apikey=1184609`, {
          method: 'GET',
          mode: 'no-cors',
        }).then(response => response.text())

        this._snackBar.open('Success form submit!', '', { duration: 5000, });
        this.form.reset();
      } catch(error) {
        this._snackBar.open((error as EmailJSResponseStatus).text, '', { duration: 5000, });
      }
    } else {
      this._snackBar.open('Form is invalid!', '', { duration: 5000, });
    }
  }
}
