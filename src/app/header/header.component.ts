import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  projects: {
    path: string,
    name: string
  }[];

  constructor(
    private router: Router
  ) {
    this.projects = [{
      name: 'Transfer Credit',
      path: '/transfer-credit'
    }, {
      name: 'Intercept',
      path: '/intercept'
    }];
  }

  ngOnInit() {
  }

  selectProject(index: number) {
    console.log(index);
    this.router.navigate([this.projects[index].path])
  }


}
