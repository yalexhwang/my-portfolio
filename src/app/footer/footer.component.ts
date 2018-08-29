import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  ngOnInit() {
  }

  toggleMore() {
    this.isOpen = !this.isOpen;
  }

}
