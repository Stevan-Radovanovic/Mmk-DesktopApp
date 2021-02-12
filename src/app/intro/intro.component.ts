import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  showLoader: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showLoader = true;
    setTimeout(() => {this.showLoader=false},1000);
  }

}
