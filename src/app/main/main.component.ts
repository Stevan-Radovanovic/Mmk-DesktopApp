import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  showLoader: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showLoader = true;
    setTimeout(() => {this.showLoader=false},1000);
  }

}
