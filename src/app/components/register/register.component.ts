import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServisiService } from 'src/app/services/login-servisi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: FormGroup = new FormGroup({});
  porukaZaKorisnika: string = '';

  constructor(private api: LoginServisiService, private router: Router) {}

  ngOnInit() {
    this.register = new FormGroup({
      CardNumber: new FormControl('', Validators.required),
      IndexNumber: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
    });
  }

  onSubmit(novaRegistracija: FormGroup) {
    if (this.register.valid) {
      this.api.postRegister(novaRegistracija.value).subscribe((rezultat) => {
        if (rezultat.Status.toUpperCase() == 'SUCCESS') {
          this.porukaZaKorisnika = rezultat.Message;

          setTimeout(() => {
            this.router.navigate(['/signin']);
          }, 1000);
        } else {
          this.porukaZaKorisnika = rezultat.Message;
        }
      });
    } else {
      this.porukaZaKorisnika = 'Jedan ili više elemenata nije ispravno popunjen!';
    }
  }
}
