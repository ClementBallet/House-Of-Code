import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html",
  styleUrls: ["./pipes.component.css"]
})
export class PipesComponent implements OnInit {
  asyncPromise: any = new Promise(resolve => {
    setTimeout(() => resolve("Async data"), 1500);
  });

  keyValueObj: { key1: String; key2: String } = {
    key1: "Value 1",
    key2: "Value 2"
  };

  constructor() {}

  ngOnInit() {}
}
