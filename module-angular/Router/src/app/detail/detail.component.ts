import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { PATH_HOME } from "../app.routes.constantes";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }
}
