import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  showLoader: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showLoader = true;
    setTimeout(() => {this.showLoader=false},1000);
  }
}
