import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  documentScrolled = false;
  menuState

  constructor( ) { }

  ngOnInit(): void { }

  sideBarToogler(event: Event) {

    this.sideBarOpen = !this.sideBarOpen;
  }


  @HostListener("document:scroll")
  DocumentScroll(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.documentScrolled = true;
    }else{
      this.documentScrolled = false;
    }
  }
}
