import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalniService } from 'src/app/services/globalni.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  login: FormGroup = new FormGroup({});
  porukaZaKorisnika: string = '';

  constructor(private api: GlobalniService, private router: Router) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      CardNumber: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
    });
  }

  onSubmit(noviLogin: FormGroup) {
    this.api.postLogin(noviLogin.value).subscribe((rezultat) => {
      if (rezultat.Status.toUpperCase() == 'SUCCESS') {
        this.porukaZaKorisnika = rezultat.Message;

        setTimeout(() => {
          this.router.navigate(['/register']);
        }, 1000);
      } else {
        this.porukaZaKorisnika = rezultat.Message;
      }
    });
  }
}
