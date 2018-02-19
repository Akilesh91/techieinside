import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show= true;
  btnClass = 'collapsed';
  navClass = '';
  shortcodeClick = false;
  isLoggedIn;
  constructor(){
    this.isLoggedIn =sessionStorage.getItem('isLoggedIn');

  }
  ngOnInit() {

     }
  toggleCollapse() {
    if (this.show) {
      this.btnClass = '';
      this.navClass = 'collapse in';
      this.show = false;
    }else {
      this.btnClass = 'collapsed';
      this.navClass = '';
      this.show = true;
    }
  }

}
