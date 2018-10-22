import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-if",
  templateUrl: "./if.component.html",
  styleUrls: ["./if.component.css"]
})
export class IfComponent implements OnInit {
  isDisplay: Boolean = true;
  isDisplayOnClick: Boolean = true;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.isDisplay = !this.isDisplay;
    }, 1000);
  }

  displayFormation() {
    this.isDisplayOnClick = !this.isDisplayOnClick;
  }
}
