import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';




@Component({
  selector: 'app-postavke',
  templateUrl: './postavke.component.html',
  styleUrls: ['./postavke.component.css']
})
export class PostavkeComponent implements OnInit {
  reset: FormGroup = new FormGroup({});
  porukaZaKorisnika: string = '';



  constructor(private api: LoginService) { }

  ngOnInit(): void {
    this.reset = new FormGroup({
      IndexNumber: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
    });
  }


  onSubmit(noviReset: FormGroup) {
    if (this.reset.valid) {
      this.api.postReset(noviReset.value).subscribe((rezultat) => {
        if (rezultat.Status.toUpperCase() == 'SUCCESS') {
          this.porukaZaKorisnika = rezultat.Message;

        } else {
          this.porukaZaKorisnika = rezultat.Message;
        }
      });
    } else {
      this.porukaZaKorisnika = 'Jedan ili više elemenata nije ispravno popunjen!';
    }
  }



}
