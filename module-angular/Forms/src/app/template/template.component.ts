import { Component, OnInit } from "@angular/core";

import { User } from "../user.model"

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.css"]
})
export class TemplateComponent implements OnInit {
  user: User = new User('Clément', 'moncul');

  constructor() {}

  ngOnInit() {}

  handleSubmit(loginFormValue) {
    console.log(loginFormValue);
    console.log('SUBMIT', this.user);
  }
}
