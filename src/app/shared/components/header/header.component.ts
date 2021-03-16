import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";
import { PostavkeComponent } from 'src/app/modules/postavke/postavke.component';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toogleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private api: ModalService) { }

  ngOnInit(): void { }

  toogleSideBar () {
    this.toogleSideBarForMe.emit();
  }

  openModal() {
    this.api.openModal(PostavkeComponent);
  }
}
