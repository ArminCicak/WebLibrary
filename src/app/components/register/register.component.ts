import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalniService } from 'src/app/globalni.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  register: FormGroup = new FormGroup({​​ }​​);
 porukaZaKorisnika: string = "";

  constructor(private api: GlobalniService, private router: Router) { }

  ngOnInit() {

    this.register = new FormGroup({​​

      CardNumber: new FormControl('', Validators.required),

      IndexNumber: new FormControl ('', Validators.required),

      Email: new FormControl('', Validators.required),

      });



    }


  onSubmit (novaRegistracija: FormGroup) {​​

  this.api.postRegister(novaRegistracija.value).subscribe((rezultat) => {

    console.log(rezultat);

    if (rezultat.Status=="Success"){

      this.porukaZaKorisnika = "Registracija je uspješna. Na Vaš email je poslan gereički password.";



    setTimeout(() => {​​

      this.router.navigate(['/signin'])

    }​​, 1000);

  }

  else  {

   this.porukaZaKorisnika = "Pogrešan broj kartice ili indexa.";
  }

  });

}

}
