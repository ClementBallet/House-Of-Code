import { Component, OnInit } from "@angular/core";
import { Formation } from "./../formation/formation.model";

@Component({
  selector: "app-for",
  templateUrl: "./for.component.html",
  styleUrls: ["./for.component.css"]
})

export class ForComponent implements OnInit {
  formations: Array<Formation> = [];
  color: String;
  backgroundColor: String;

  constructor() {}

  getColorByElement(isFirst: Boolean, isLast: Boolean) {
    if (isFirst) {
      this.color = "red";
    } else if (isLast) {
      this.color = "green";
    } else {
      this.color = "black";
    }
    return this.color;
  }

  setBkg(isPair: Boolean) {
    return isPair ? this.backgroundColor = "darkgrey" : this.backgroundColor = "";
  }

  ngOnInit() {
    this.formations = [
      new Formation("Module Angular", "1000", "01 janvier 2018", "15 may 2018"),
      new Formation("Module JavaScript", "2000", "16 may 2018", "23 septembre 2018"),
      new Formation("Module TypeScript", "500", "24 septembre 2018", "31 decembre 2018")
    ];
  }
}
