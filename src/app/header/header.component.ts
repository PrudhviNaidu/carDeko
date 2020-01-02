import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'car-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
      jVersion: any;

  constructor() {
      this.jVersion = environment.version;
  }

  ngOnInit() {
  }

}
