import { Component, OnInit } from '@angular/core';
import { PostavkeComponent } from 'src/app/modules/postavke/postavke.component';
import {ModalService} from '../../../services/modal.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private api: ModalService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.api.openModal(PostavkeComponent);
  }



}
